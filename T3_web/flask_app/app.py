from flask import Flask, request, render_template, redirect, url_for, session, jsonify
from flask_cors import cross_origin
from werkzeug.utils import secure_filename
from utils.validations import validate_product, validate_request
from database import db
import hashlib
import filetype
import os
import uuid

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)

app.secret_key = "s3cr3t_k3y"

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

@app.errorhandler(413)
def request_entity_too_large(error):
    return 'File exceeds the maximum file size allowed', 413

# --- Ruta index ---

@app.route("/")
def index():
    exito = request.args.get("exito")
    return render_template("otros/index.html", exito=exito)

# --- Ruta de los gráficos ---

@app.route("/graficos", methods=["GET"])
def graficos():
    return render_template("otros/graficos.html")

@app.route("/conseguir-info", methods=["GET"])
@cross_origin(origin="localhost", supports_credentials=True)
def conseguir_info():
    info_productos = db.cant_fv_segun_tipo()
    info_pedidos = db.cant_pedidos_segun_comuna()

    productos = [{"type": row[0], "count": row[1]} for row in info_productos]
    pedidos = [{"type": row[0], "count": row[1]} for row in info_pedidos]

    return jsonify({"productos": productos, "pedidos": pedidos})

# --- Rutas para los Productos ---

@app.route("/agregar_producto", methods=["GET", "POST"])
def agregar_producto():
    if request.method == "POST":
        
        fv = request.form.get("fv-formulario")
        # Como opciones se guarda de la forma str = 'int,int,...' debemos extraerlos y pasarlos a un array de ints
        opcionesFV = request.form.getlist("selector-fv")

        # Separar la cadena en una lista de cadenas individuales
        id_list_str = opcionesFV[0].split(',')

        # Convertir la lista de cadenas en una lista de enteros
        id_list_int = list(map(int, id_list_str))

        description = request.form.get("descripcion")
        images = request.files.getlist("fotos-formulario")
        region = request.form.get("region-formulario")
        comuna = request.form.get("comuna-formulario")
        name = request.form.get("nombre-formulario")
        mail = request.form.get("correo-formulario")
        cellnumber = request.form.get("numero-formulario")

        if validate_product(fv, opcionesFV, description, images, region, comuna, name, mail, cellnumber):
            # Subimos las tuplas a sus respectivas bases de datos
            producto_id = db.insertar_producto(fv, description, comuna, name, mail, cellnumber)

            # Insertamos las frutas/verduras asociadas a este producto
            for item in id_list_int:
                db.insertar_producto_verdura_fruta(producto_id, item)

            # Antes de subir las imágenes, necesitamos obtener las rutas donde quedan almacenadas dentro del servidor
            # Creamos variables para generarle un nombre seguro y guardarlo, además de guardar la ruta de este archivo
            # Finalmente, subimos las fotos del producto una por una (ciclo for)
            for img in images:
                _filename = hashlib.sha256(
                    secure_filename(img.filename) # nombre del archivo
                    .encode("utf-8") # encodear a bytes
                    ).hexdigest()
                _extension = filetype.guess(img).extension
                img_filename = f"{_filename}.{_extension}"
                img_path = os.path.join(app.config['UPLOAD_FOLDER'], img_filename)
                img_path = img_path.replace("\\", "/")
                img.save(img_path)

                db.insertar_foto(img_path, img_filename, producto_id)

        return render_template("agregar/agregar-producto.html")
        
    elif request.method == "GET":
        return render_template("agregar/agregar-producto.html")
    
@app.route("/ver_productos", methods=["GET"])
def ver_productos():
    if request.method == "GET":
        max_pag = db.max_paginas_prod()[0]
        pag = request.args.get("pag", type=int)

        # Caso 1: No hay datos
        if db.cant_productos()[0] == 0:
            return render_template("ver/ver-productos.html", pag=1, max_pag=1)
        
        if not pag or pag-1 < 0:
            pag = 1

        if pag+1 > max_pag:
            pag = max_pag

        # Caso 2: Si cambiamos la página hacemos loop
        # Forzamos a que los botones no cambien el valor de pag si esto sucediera
    
        datos = []
        contador = 1
        for producto in db.list_prod_nuevo_antiguo_sel(pag, pag_size=5):
            producto_id, tipo, _, comuna_id, _, _, _, = producto
            comuna = db.comuna_sgn_id(comuna_id)
            region = db.region_sgn_comuna(comuna_id)
            opc_producto = db.tipos_sgn_producto(producto_id)

            seleccion = ""
            for elem in opc_producto:
                seleccion = seleccion+elem[0]+", "

            fotos = db.fotos_sgn_producto(producto_id)
            fotos_productos = []
    
            for foto in fotos:
                fotos_productos.append(foto[0])

            datos.append({
                "contador": contador,
                "tipo": tipo.capitalize(),
                "id": producto_id,
                "opciones_fv": seleccion[:-2],
                "region": region[0],
                "comuna": comuna[0],
                "fotos": fotos_productos
            })

            contador = contador + 1

        return render_template("ver/ver-productos.html", datos=datos, pag=pag, max_pag=max_pag)

@app.route("/informacion_producto", methods=["GET"])
def informacion_producto():
    if request.method == "GET":
        # Llamamos los datos desde "ver-producto"
        producto_id = request.args.get("producto_id")

        # Formateamos los datos, para encontrar todo lo que debamos desplegar sobre el producto
        datos = []
        tipo, descripcion, comuna_id, nombre, email, celular, = db.producto_sgn_id(producto_id)
        comuna = db.comuna_sgn_id(comuna_id)
        region = db.region_sgn_comuna(comuna_id)
        opc_producto = db.tipos_sgn_producto(producto_id)

        seleccion = ""
        for elem in opc_producto:
            seleccion = seleccion+elem[0]+", "

        fotos = db.fotos_sgn_producto(producto_id)
        fotos_productos = []

        for foto in fotos:
            fotos_productos.append(foto[0])

        datos.append({
            "tipo": tipo.capitalize(),
            "opciones_fv": seleccion[:-2],
            "descripcion": descripcion,
            "region": region[0],
            "comuna": comuna[0],
            "nombre": nombre,
            "email": email,
            "celular": celular,
            "fotos": fotos_productos
        })

        # Renderizamos la plantilla, enviando los datos del producto correspondiente
        return render_template("informacion/informacion-producto.html", datos=datos)

# --- Rutas para los pedidos ---

@app.route("/agregar_pedido", methods=["GET", "POST"])
def agregar_pedido():
    if request.method == "POST":
        
        fv = request.form.get("fv-formulario")
        # Como opciones se guarda de la forma str = 'int,int,...' debemos extraerlos y pasarlos a un array de ints
        opcionesFV = request.form.getlist("selector-fv")

        # Separar la cadena en una lista de cadenas individuales
        id_list_str = opcionesFV[0].split(',')

        # Convertir la lista de cadenas en una lista de enteros
        id_list_int = list(map(int, id_list_str))

        description = request.form.get("descripcion")
        region = request.form.get("region-formulario")
        comuna = request.form.get("comuna-formulario")
        name = request.form.get("nombre-formulario")
        mail = request.form.get("correo-formulario")
        cellnumber = request.form.get("numero-formulario")

        if validate_request(fv, opcionesFV, description, region, comuna, name, mail, cellnumber):
            # Subimos las tuplas a sus respectivas bases de datos
            pedido_id = db.insertar_pedido(fv, description, comuna, name, mail, cellnumber)

            # Insertamos las frutas/verduras asociadas a este producto
            for item in id_list_int:
                db.insertar_pedido_verdura_fruta(pedido_id, item)

        return render_template("agregar/agregar-pedido.html")
        
    elif request.method == "GET":
        return render_template("agregar/agregar-pedido.html")

@app.route("/ver_pedidos", methods=["GET"])
def ver_pedidos():
    if request.method == "GET":
        max_pag = db.max_paginas_ped()[0]
        pag = request.args.get("pag", type=int)

        # Caso 1: No hay datos
        if db.cant_pedidos()[0] == 0:
            return render_template("ver/ver-pedidos.html", pag=1, max_pag=1)
        
        if not pag or pag-1 < 0:
            pag = 1

        if pag+1 > max_pag:
            pag = max_pag

        # Caso 2: Si cambiamos la página hacemos loop
        # Forzamos a que los botones no cambien el valor de pag si esto sucediera
    
        datos = []
        contador = 1
        for pedido in db.list_ped_nuevo_antiguo_sel(pag, pag_size=5):
            pedido_id, tipo, _, comuna_id, nombre, _, _, = pedido
            comuna = db.comuna_sgn_id(comuna_id)
            region = db.region_sgn_comuna(comuna_id)
            opc_producto = db.tipos_sgn_pedido(pedido_id)

            seleccion = ""
            for elem in opc_producto:
                seleccion = seleccion+elem[0]+", "

            datos.append({
                "contador": contador,
                "tipo": tipo.capitalize(),
                "id": pedido_id,
                "opciones_fv": seleccion[:-2],
                "region": region[0],
                "comuna": comuna[0],
                "nombre": nombre
            })

            contador = contador + 1

        return render_template("ver/ver-pedidos.html", datos=datos, pag=pag, max_pag=max_pag)
    
@app.route("/informacion_pedido", methods=["GET"])
def informacion_pedido():
    if request.method == "GET":
        # Llamamos los datos desde "ver-pedido"
        pedido_id = request.args.get("pedido_id")

        # Formateamos los datos, para encontrar todo lo que debamos desplegar sobre el producto
        datos = []
        tipo, descripcion, comuna_id, nombre, email, celular, = db.pedido_sgn_id(pedido_id)
        comuna = db.comuna_sgn_id(comuna_id)
        region = db.region_sgn_comuna(comuna_id)
        opc_producto = db.tipos_sgn_pedido(pedido_id)

        seleccion = ""
        for elem in opc_producto:
            seleccion = seleccion+elem[0]+", "

        datos.append({
            "tipo": tipo.capitalize(),
            "opciones_fv": seleccion[:-2],
            "descripcion": descripcion,
            "region": region[0],
            "comuna": comuna[0],
            "nombre": nombre,
            "email": email,
            "celular": celular
        })

        # Renderizamos la plantilla, enviando los datos del producto correspondiente
        return render_template("informacion/informacion-pedido.html", datos=datos)

# P.D: Si por algún motivo el apartado de estadísticas no funcionara, personalmente tuve problemas con el puerto de cross-origin.
# En el auxiliar 7 utilizan el puerto 8007, pero si usaba ese puerto tenía problemas y ni siquiera renderizaba graficos.html en mi tarea.
# Me gustaría creer que se debe al puerto en el que abro la tarea (el cual es 5000), por eso debí usar ese puerto, sino no funcionaba.
# Dejo este comentario acá ante la eventualidad de que esa parte de la tarea no pueda visualizarse.
# Por favor quien revise esta tarea me envía un correo si algo así llegase a suceder.
# - Mario B.

if __name__ == "__main__":
    app.run(debug=True)