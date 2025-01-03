# Ejercicio 3

**Nombre**: Mario Ignacio Benavente Cerro

---
## Observaciones
Tenga en cuenta las siguientes observaciones al realizar el ejercicio:

- El ejercicio es de carácter **personal**; la copia será penalizada con **nota mínima**.
- De ser necesario investigar, usted esta **autorizado a utilizar internet** como herramienta.
- El uso de modelos generativos de lenguaje como **ChatGPT está estrictamente prohibido** y será penalizado con **nota mínima**. 
- Recuerde incluir referencias para las preguntas de investigacion. 

## Pregunta 1
En auxiliar hemos hablado sobre cómo el input del usuario puede ser malicioso. Un ejemplo de esto son las inyecciones SQL, una de las vulnerabilidades más populares. Ésta consiste en que input hecho por el usuario permite inyectar código en las sentencias SQL que usamos (cómo cuando guardamos algo en la base de datos).

A pesar de ser una de las vulnerabilidades más recurrentes en aplicaciones web, no es la única donde el input del usuario juega una mala pasada. Otro ejemplo es el llamado **Server Side Template Injection** (SSTI). Investigue y explique brevemente en qué consiste esta vulnerabilidad.

**Respuesta**:

SSTI, o Server-Side Template Injection, es una vulnerabilidad donde el atacante es capaz de usar la sintáxis nativa de la plantilla (Template) de la página para inyectar datos maliciosos a la plantilla, los cuales luego serían ejecutados del lado del servidor (Server-Side). 

Estas vulnerabilidades suelen aparecer cuando el input de usuario se concatena directamente al template, en vez de ser recibido como data, lo que permite al atacante inyectar código para que se ejecute dentro del template, pudiendo modificarlo por completo, e incluso darle acceso completo al servidor.

El atacante primero busca detectar si siquiera existe una vulnerabilidad SSTI, ingresando caracteres especiales que se utilizan generamente para denominar expresiones de plantilla (Ejemplos: ``${{<%[%'"}}%\``). Si aparece una excepción del lado de la página, probablemente el servidor está intentando interpretar parte del template con los caracteres que se ingresaron de parte del atacante.

Luego, si se identifica potencial para un SSTI, el atacante debe averiguar el motor de plantilla que la página está utilizando, generalmente provocado mediante el ingreso de sintáxis inválido, donde el mensaje de error puede decirte el motor de plantilla, e incluso la versión del mismo.

Finalmente, el atacante deberá averiguar formas de abusar esta vulnerabilidad en la página, con tal de ganar acceso al servidor.

P.D: Esta es la [fuente](https://portswigger.net/web-security/server-side-template-injection) de donde se obtuvo la información para responder esta pregunta. 

## Pregunta 2

Usted cuenta con el siguiente proyecto de flask:
```bash
flask_app
├── app.py
├── static
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── code.js
│   └── svg
│       └── icon.svg
└── templates
    ├── base.html
    └── ruta.html
```
En donde `app.py` tiene las siguientes rutas:
```python
@app.route("/", methods=["GET"])
def index():
    return render_template("ruta.html")

@app.route("/<num>", methods=["GET"])
def index_param(num):
    return render_template("ruta.html", num=int(num))
```
Y `base.html` tiene la siguiente forma:
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>{% block title %}{% endblock %}</title>
    {% block css %}{% endblock %}
  </head>
  <body>
    {% block content %}{% endblock %}
    {% block javascript %}{% endblock %}
  </body>
</html>
```

El objetivo de esta pregunta es que usted rellene los bloques de la template `ruta.html` **utilizando funcionalidades de `Jinja`** tal que se cumplan los siguientes requerimientos:

1. Se enlaza al documento HTML el archivo `styles.css`
2. Se incluye el codigo javascript en `code.js`.
3. En caso de que se entregue una variable `num` en el url, se debera mostrar `num` veces la imagen `icon.svg`.
4. En caso de que no se entregue `num`, se debera mostrar un parrafo que diga "*No se entrego un valor*".

**Respuesta:**
```html
{% extends 'base.html' %}

{% block title %}Ruta{% endblock %}

{% block css %}
    <link
      rel="stylesheet"
      type="text/css"
      href="{{ url_for('static', filename='css/styles.css')}}"
    />
{% endblock %}

{% block content %}
    <h1>RUTA!</h1>
    {% if num %}
      {% for x in range(num) %}
        <img src="{{ url_for('static', filename='svg/icon.svg')}}">
      {% endfor %}
    {% else %}
      <p>No se entrego un valor</p>
    {% endif %}
{% endblock %}

{% block javascript %}
    <!-- <script lang="javascript" src="{{ url_for('static', filename='js/code.js') }}"></script> -->
{% endblock %}
```
**Hint:** para ubicar archivos use la funcion `url_for` de `Jinja`.


## Pregunta 3
Usted está haciendo una aplicación Flask y su archivo de rutas se ve así:

```python
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/exito')
def exito():
  return "Respondiste correctamente!"

@app.route('/malo')
def malo():
  return "Respondiste mal :("

@app.route('/pregunta', method=('GET', 'POST'))
def pregunta():
  return render_template('pregunta.html')
```

En este momento la aplicación envía el HTML *pregunta.html* con un formulario como el siguiente:

```html
<form action="pregunta" method="post" enctype="multipart/form-data">
  <label for="pregunta">Pregunta</label>
  <input id="mi-input" name="pregunta" type="text">
  <button type="submit">Enviar</button>
</form>
```

Complete la función `pregunta` para que al enviar el formulario valide que el texto enviado en el formulario:
- No tenga la palabra "garfield"
- Tenga al menos 5 caracteres y máximo 30
- Tenga algún dígito

Si cumple todas estas condiciones redireccione al usuario a la ruta `exito`, de lo contrario redirija a la ruta `malo`. Sólo puede programar en Python en el espacio que se proporciona en la respuesta.

Reciba el formulario si el método es `POST`, tome el input, escriba y use la función `validar_input` para validar el input.

**Respuesta**:
```python
# IMPORTE LO QUE TENGA QUE IMPORTAR DE FLASK
from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/exito')
def exito():
  return "Respondiste correctamente!"

@app.route('/malo')
def malo():
  return "Respondiste mal :o"

def validar_input(mi_input):
  return not "garfield" in mi_input and len(mi_input) >= 5 and len(mi_input) <= 30 and ("0" in mi_input or "1" in mi_input or "2" in mi_input or "3" in mi_input or "4" in mi_input or "5" in mi_input or "6" in mi_input or "7" in mi_input or "8" in mi_input or "9" in mi_input)

@app.route('/pregunta', method=('GET', 'POST'))
def pregunta():
  if request.method == "POST":
    respuesta = request.form.get("pregunta")
    if validar_input(respuesta):
      return redirect(url_for("exito"))
    else:
      return redirect(url_for("malo"))
  return render_template('pregunta.html')
```