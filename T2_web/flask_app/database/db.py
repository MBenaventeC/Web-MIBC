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
	cursor.execute(QUERY_DICT["insertar_producto"], (tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor))
	conn.commit()

def list_prod_nuevo_antiguo(id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["list_prod_nuevo_antiguo"], (id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor))
	lista = cursor.fetchall()
	return lista

def top5_list_prod_nuevo_antiguo(id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["top5_list_prod_nuevo_antiguo"], (id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor))
	lista = cursor.fetchall()
	return lista

def de5a10_list_prod_nuevo_antiguo(id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["de5a10_list_prod_nuevo_antiguo"], (id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor))
	lista = cursor.fetchall()
	return lista

def insertar_verdura_fruta(producto_id, tipo_verdura_fruta_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insertar_verdura_fruta"], (producto_id, tipo_verdura_fruta_id))
	conn.commit()

def tipos_sgn_producto(nombre):
	# "nombre" = TVF.nombre (averiguar si esto está bien)
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["tipos_sgn_producto"], (nombre))
	conn.commit()

def insertar_foto(ruta_archivo, nombre_archivo, producto_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insertar_foto"], (ruta_archivo, nombre_archivo, producto_id))
	conn.commit()

def fotos_sgn_producto(ruta_archivo, nombre_archivo):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["fotos_sgn_producto"], (ruta_archivo, nombre_archivo))
	fotos = cursor.fetchall()
	return fotos
	
def ultimo_id_insertado():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["ultimo_id_insertado"])
	ultimo_id = cursor.fetchone()
	return ultimo_id

# -- db-related functions --

# Guiarme de las que estan en _aux_5 y ver qué necesito más adelante para mi propia tarea