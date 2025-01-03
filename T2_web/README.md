# CC5002 - Desarrollo de Aplicaciones WEB
## Tarea 2

Esta tarea consiste en una aplicación web CONECTADA (esta vez) a una base de datos, donde quien la use puede ser capaz de permitir a productores de frutas y verduras informar los productos que tienen para vender.

Por otro lado, debe servir al cliente para también ver dichos productos, y poder saber más sobre cada producto específico.

Para esto, se nos pide extender las implementaciones de los siguientes archivos .html:

* index.html
* agregar-producto.html
* ver-productos.html 
* informacion-producto.html

Estos archivos irán acompañados de sus respectivos archivos .css y .js, para añadir estilización y funcionalidad a nuestros archivos .html, respectivamente.

Sumado a esto, nos piden implementar Flask y subir datos a unas bases de datos que nos entregan por MySQL y herramientas como Docker y Beekeeper Studio. Archivos como:

* app.py
* db.py
* validations-py

En vista de esto, el siguiente README tiene el propósito de explicar ciertas decisiones tomadas a lo largo del desarrollo de esta Tarea. Iremos avanzando archivo por archivo.

### index.html

Simplemente adapté la implementación realizada para la Tarea 1, implementando el formato de Jinja 2.

### agregar-producto.html

Lo que había que hacer con este archivo era extenderlo para generar una conexión mediante Flask entre este HTML y la ruta de Flask en app.py:

> [...] pero al momento de
presionar el botón “Agregar Producto” y presionar el botón de confirmación, se debe
hacer submit a una URL que es atendida por Flask y que debe validar los datos en el
lado del servidor e inserta un registro en la base de datos en las tablas “producto”,
“producto_verdura_fruta” y “foto”, junto con almacenar los archivos que corresponda.

Sumado a esto, lamentablemente no logré hacer que los datos se subieran efectivamente a las bases de datos que se nos entregan. Esto es un problema multicausal que se resume principalmente en:

1) Al parecer habían errores en mi archivo db.py que entregan errores a la terminal a la hora de intentar subir ciertas cosas a las db's.
2) No logré hacer que `form.request.getlist` recibiera las elecciones de frutas y verduras que había realizado, a pesar de que la ruta recibía todo lo demás (la elección entre frutas y verduras, descripción del producto, fotos del producto, nombre, correo y número de celular del productor).
3) Tuve problemas a la hora de trabajar con MySQL y Beekeeper Studio, y debo admitir que la mitad del tiempo no sabía lo que estaba haciendo.

> Si
todo resulta bien, debe volver a la página de inicio informando un mensaje apropiado.

Si ignoramos (dejar en modo comentario) las funciones para subir los datos a las respectivas db's, el formulario, una vez confirmas el envío, te dirige al index, aunque no alcancé a añadir el mensaje de formulario exitoso.

### ver-productos.html

Es una versión aún más primitiva de lo que tenía en la Tarea 1, con implementaciones de Jinja, pero hacer click en las filas no despliega la información completa de un producto.

Simplemente no me alcanzó el tiempo.

### Anexo

`Ojo: Cabe destacar que las fotos de este anexo siguen en el trabajo a pesar de no darles uso (puesto que no aparecen bien en la página), pero por el simple hecho de incluirlas en una carpeta "jpg", considero necesario conservar el anexo.`

Las regiones y comunas por región se obtuvieron de la siguiente [página](https://www.bcn.cl/siit/mapoteca/comunas), parte de la BCN (Biblioteca del Congreso Nacional de Chile).

Con respecto a las imágenes utilizadas para frutas y verduras, todas se extrajeron como fotos de licencia gratuita desde Freepik. Adjunto el link para cada foto con el link del Autor de dicha imagen:

1. [Kiwi/Limón/Naranja/Pomelo](https://www.freepik.es/foto-gratis/vista-superior-pomelo-organico-kiwi-lima_7280108.htm#fromView=search&page=1&position=6&uuid=cd3d1c23-56ad-4026-b4f3-3f6e8191704d) (Autor: [freepik](https://www.freepik.es/autor/freepik))

2. [Frambuesas](https://www.freepik.es/foto-gratis/frambuesas-dispuestas-crear-fondo-visualmente-atractivo_135010097.htm#fromView=search&page=2&position=6&uuid=cd3d1c23-56ad-4026-b4f3-3f6e8191704d) (Autor: [rorozoa](https://www.freepik.es/autor/rorozoa))

3. [Cereza/Frambuesa/Frutilla/Naranja/Uva](https://www.freepik.es/foto-gratis/vista-superior-fruta-variada_903081.htm#fromView=search&page=2&position=48&uuid=cd3d1c23-56ad-4026-b4f3-3f6e8191704d) (Autor: [jcstudio](https://www.freepik.es/autor/jcstudio))

4. [Kiwi](https://www.freepik.es/foto-gratis/primer-plano-rodajas-fruta-kiwi-verde_3077291.htm#fromView=search&page=5&position=2&uuid=cd3d1c23-56ad-4026-b4f3-3f6e8191704d) (Autor: [rawpixel.com](https://www.freepik.es/autor/rawpixel-com))

5. [Champiñon/Pimiento/Tomate](https://www.freepik.es/foto-gratis/tomates-champinones-pimientos-vista-superior_10300514.htm#fromView=search&page=1&position=35&uuid=54c3fc5e-715d-4f52-aeb4-03b6be3d4fdf) (Autor: [freepik](https://www.freepik.es/autor/freepik))

Si bien en los términos de Freepik no se permite la transformación de imágenes, no especifican a qué se refiere esto, por lo que decidí creer que modificar la resolución de la imagen no cuenta como transformar de gran manera la foto, además de que no perjudica de ninguna manera a los Autores, siendo usadas con fines exclusivamente educativos.

Las fotos se encuentran todas en una carpeta llamada 'jpg'. Las usadas para la tarea tendrán como nombre las frutas/verduras de la foto y su resolución (Ej: 'fruta 640x480'), mientras que las originales tienen de nombre únicamente las frutas/verduras que las definen (Ej: 'verdura1 verdura2').