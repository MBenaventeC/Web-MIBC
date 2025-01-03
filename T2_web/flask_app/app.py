from flask import Flask, request, render_template, redirect, url_for, session, jsonify
from werkzeug.utils import secure_filename
from utils.validations import validate_form
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
    return render_template("otros/index.html")

# --- Rutas para Agregar ---

@app.route("/agregar_producto", methods=["GET", "POST"])
def agregar_producto():
    if request.method == "POST":
        print(request.form)
        print(request.files)
        
        fv = request.form.get("fv-formulario")
        opcionesFV = request.form.getlist("selector-fv")
        print(opcionesFV)
        description = request.form.get("descripcion")
        images = request.files.getlist("fotos-formulario")
        region = request.form.get("region-formulario")
        comuna = request.form.get("comuna-formulario")
        name = request.form.get("nombre-formulario")
        mail = request.form.get("correo-formulario")
        cellnumber = request.form.get("numero-formulario")

        if validate_form(fv, opcionesFV, description, images, region, comuna, name, mail, cellnumber):
            print("nice")
            # Subimos las tuplas a sus respectivas bases de datos
            db.insertar_producto(fv, description, comuna, name, mail, cellnumber)
            
            # Obtenemos el id del producto recién insertado (es decir, el último id)
            producto_id = db.ultimo_id_insertado()

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
                img.save(img_path)

                db.insertar_foto(img_path, img_filename, producto_id)

        return render_template("agregar/agregar-producto.html")
        
    elif request.method == "GET":
        return render_template("agregar/agregar-producto.html")
    
@app.route("/ver_productos")
def ver_productos():
    return render_template("ver/ver-productos.html")

@app.route("/agregar_pedido")
def agregar_pedido():
    return render_template("agregar/agregar-pedido.html")

@app.route("/ver_pedidos")
def ver_pedidos():
    return render_template("ver/ver-pedidos.html")

if __name__ == "__main__":
    app.run(debug=True)