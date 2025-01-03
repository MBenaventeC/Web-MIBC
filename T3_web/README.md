# CC5002 - Desarrollo de Aplicaciones WEB
## Tarea 3 // Fecha de Entrega: 14/06/2024

Esta tarea consiste en una aplicación web con conexión a una Base de Datos, donde deberemos extender las funcionalidades para completar un formulario para añadir un producto a pedidos (son muy similares en estructura), además de un apartado donde sea revisar gráficos relacionados a los datos que se hayan subido a las Bases de Datos.

La primera implementación es una directa adaptación de lo que fue solicitado para la Tarea 2, precesora a ésta, y la funcionalidad de los gráficos pasaría a ser "contenido nuevo".

Para esto, se nos pide extender las implementaciones de los siguientes archivos .html:

* index.html
* agregar-producto.html
* ver-productos.html 
* informacion-producto.html
* agregar-pedido.html
* ver-pedidos.html
* informacion-pedido.html

Además, para los gráficos crearemos un apartado .html nuevo:

* graficos.html

Estos archivos irán acompañados de sus respectivos archivos .css y .js, para añadir estilización y funcionalidad a nuestros archivos .html, respectivamente.

Como estamos extendiendo y puliendo lo realizado para la Tarea 2, todo .html presente está en el formato de Jinja 2.

Cabe destacar que, a diferencia de la tarea anterior, esta vez algunos archivos fueron estandarizados mediante un template base, con extensiones correspondientes (en algunos casos por simplicidad se dejó tal cual estaba anteriormente, pero implementar una base de html para luego extenderla es trabajo sencillo).

Sumado a esto, nos piden implementar Flask y subir datos a unas Bases de Datos de MySQL y herramientas como Docker y Beekeeper Studio para trabajarlas (inserción de tuplas). Igual que en la Tarea 2, usaremos los mismos archivos de Python para esta tarea:

* app.py
* db.py
* validations.py

En vista de esto, el siguiente README tiene el propósito de explicar ciertas decisiones tomadas a lo largo del desarrollo de esta Tarea. Iremos avanzando archivo por archivo.

### index.html

Es muy similar al index.html presente en la Tarea 2, con la adición de un quinto botón que nos permite acceder a graficos.html, donde podremos ver un desglose de ciertas cosas que se nos requiere comunicar al usuario por enunciado:

> La nueva funcionalidad corresponde a una nueva página que contiene 2 gráficos, uno para los productos y otro para los pedidos. Para los productos debe mostrar el total de productos por tipo de fruta o verdura. Para el caso de los pedidos, debe mostrar el total por comuna. Los gráficos pueden ser de barras o circular.

Por otro lado, el parámetro de "exito" que se utilizó en la Tarea 2 para informar al usuario de un envío de producto exitoso fue reutilizado para los pedidos, con leves cambios en los valores que "exito" puede tomar, haciendo que el mensaje varíe según el tipo de formulario enviado.

### agregar-pedido.html

Lo que había que hacer con este archivo era extenderlo para generar una conexión mediante Flask entre este HTML y la ruta de Flask en app.py. Dado que es precisamente lo que se solicitó en la T2 para agregar-producto.html, no entraremos mucho en detalle:

> [...] pero al momento de presionar el botón “Agregar Pedido” y presionar el botón de confirmación, se debe hacer submit a una URL que es atendida por Flask y que debe validar los datos en el lado del servidor e insertar un registro en la base de datos en las tablas “pedido” y “pedido_fruta_verdura”. Si todo resulta bien, debe volver a la página de inicio informando un mensaje apropiado.

Como es mencionado antes, apenas se confirma el envío del formulario, el usuario es redirigido a index.html, donde aparece un mensaje de éxito.

Para la descripción, si bien no se valida el contenido como tal (se guarda como texto, no como innerHTML), se comprueba que el largo no exceda los 300 caracteres.

Para el número de celular, dado que nuevamente es ambiguo el formato, validamos con Regex que sea de la forma +569XXXXXXXX (celular Chile).

### ver-pedidos.html

> debe obtener el listado de pedidos registrados desde la base de datos y los debe desplegar tal como se indicó en la tarea 1. Se deben mostrar en grupos de 5 filas, si hay más de 5 productos en la base de datos, los debe mostrar por página permitiendo avanzar y retroceder según corresponda.

Este HTML está estilizado con una tabla, que muestra las fotos correspondientes (muestra más de una foto si se subieron 2 o 3 fotos) en resolución 120x120px, al igual que los otros datos.

Abajo se dejan dos botones para cambiar el número de la página en la que se está actualmente.

### informacion-pedido.html

>  Si se hace click sobre una fila se debe mostrar la información del pedido como se pidió en la tarea 1.

Se despliegan todos los datos asociados a un pedido. Los datos son todos extraídos directamente de la Base de Datos (cabe destacar que varios datos ya están presentes en la tabla, por lo que usamos estos datos para extraer todo pedazo de información que nos falte de este pedido).

### graficos.html

>  Los gráficos pueden ser de barras o circular. 

Por simplicidad y preferencia personal se escogió hacer ambos gráficos en formato de gráfico de barras. Cada gráfico tiene una "paleta" de colores, con 4 opciones cada una. Estos colores son luego escogidos al azar para cada valor único presente en el gráfico, para evitar monotonía de color.

Lo anterior tiene otros dos efectos, aunque más cosméticos que prácticos:

1. Rompe con la simplicidad que es ver un único color para todas las barras, haciendo más ameno navegar a través de las barras de cada gráfico, y que se vea "menos aburrido"
2. Aunque son colores escogidos al azar (se escogen al azar cada vez que entramos a graficos.html o cada vez que, dentro de esta parte de la aplicación web, refrescamos la página), ayudan a ubicar espacialmente ciertos datos dentro de los gráficos: evita perdernos entre tantas opciones

### Consideraciones

A diferencia de la Tarea 2, esta vez todo archivo .html quedó bien implementado y es funcional: no hay pedazos de la tarea que existan sin un propósito, a excepción de algunas queries MySQL presentes en db.py y/o en sentencias.json, que no se usaron como parte del desarrollo de la tarea.

Esta aplicación no utiliza fotos sacadas de otras fuentes. El logo es 100% original, hecho por mí, por lo que de momento no hay archivos que acreditar.