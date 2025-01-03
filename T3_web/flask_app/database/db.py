import pymysql
import json

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

with open('database/sentencias.json', 'r') as querys:
	QUERY_DICT = json.load(querys)

# -- conn ---

def get_conn():
	conn = pymysql.connect(
		db=DB_NAME,
		user=DB_USERNAME,
		passwd=DB_PASSWORD,
		host=DB_HOST,
		port=DB_PORT,
		charset=DB_CHARSET
	)
	return conn

# -- querys --

def insertar_producto(tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insertar_producto"], (tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor,))
	conn.commit()
	cursor.execute(QUERY_DICT["ultimo_id_insertado"])
	return cursor.fetchone()[0]

def insertar_pedido(tipo, descripcion, comuna_id, nombre_comprador, email_comprador, celular_comprador):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insertar_pedido"], (tipo, descripcion, comuna_id, nombre_comprador, email_comprador, celular_comprador,))
	conn.commit()
	cursor.execute(QUERY_DICT["ultimo_id_insertado"])
	return cursor.fetchone()[0]

def list_prod_nuevo_antiguo():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["list_prod_nuevo_antiguo"])
	lista = cursor.fetchall()
	return lista

def list_prod_nuevo_antiguo_sel(pag, pag_size):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT * FROM producto ORDER BY id DESC LIMIT %s, %s;", ((pag-1) * 5, pag_size,))
	productos = cursor.fetchall()
	return productos

def list_ped_nuevo_antiguo():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["list_ped_nuevo_antiguo"])
	lista = cursor.fetchall()
	return lista

def list_ped_nuevo_antiguo_sel(pag, pag_size):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT * FROM pedido ORDER BY id DESC LIMIT %s, %s;", ((pag-1) * 5, pag_size,))
	pedidos = cursor.fetchall()
	return pedidos

def insertar_producto_verdura_fruta(producto_id, tipo_verdura_fruta_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insertar_producto_verdura_fruta"], (producto_id, tipo_verdura_fruta_id,))
	conn.commit()

def insertar_pedido_verdura_fruta(pedido_id, tipo_verdura_fruta_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insertar_pedido_verdura_fruta"], (tipo_verdura_fruta_id, pedido_id,))
	conn.commit()

def tipos_sgn_producto(producto_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["tipos_sgn_producto"], (producto_id,))
	tipos = cursor.fetchall()
	return tipos

def tipos_sgn_pedido(pedido_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["tipos_sgn_pedido"], (pedido_id,))
	tipos = cursor.fetchall()
	return tipos

def insertar_foto(ruta_archivo, nombre_archivo, producto_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insertar_foto"], (ruta_archivo, nombre_archivo, producto_id,))
	conn.commit()

def fotos_sgn_producto(producto_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["fotos_sgn_producto"], (producto_id,))
	fotos = cursor.fetchall()
	return fotos
	
def ultimo_id_insertado():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["ultimo_id_insertado"])
	ultimo_id = cursor.fetchone()[0]
	return ultimo_id

def cant_productos():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["cant_productos"])
	total = cursor.fetchone()
	return total

def cant_pedidos():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["cant_pedidos"])
	total = cursor.fetchone()
	return total

def max_paginas_prod():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["max_paginas_prod"])
	cant_max = cursor.fetchone()
	return cant_max

def max_paginas_ped():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["max_paginas_ped"])
	cant_max = cursor.fetchone()
	return cant_max

def comuna_sgn_id(comuna_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT nombre FROM comuna WHERE %s=comuna.id", (comuna_id,))
	cant_max = cursor.fetchone()
	return cant_max

def region_sgn_comuna(comuna_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT region.nombre FROM comuna INNER JOIN region ON comuna.region_id = region.id WHERE comuna.id = %s", (comuna_id,))
	region = cursor.fetchone()
	return region

def producto_sgn_id(producto_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor from producto WHERE id=%s", (producto_id,))
	producto = cursor.fetchone()
	return producto

def pedido_sgn_id(pedido_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT tipo, descripcion, comuna_id, nombre_comprador, email_comprador, celular_comprador from pedido WHERE id=%s", (pedido_id,))
	producto = cursor.fetchone()
	return producto

def cant_fv_segun_tipo():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["cant_fv_segun_tipo"])
	resultados = cursor.fetchall()
	return resultados

def cant_pedidos_segun_comuna():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["cant_pedidos_segun_comuna"])
	resultados = cursor.fetchall()
	return resultados