# CC5002 - Desarrollo de Aplicaciones WEB
## Tarea 1

Esta tarea consiste en una aplicación web sin conexión a una base de datos, donde quien la use puede ser capaz de permitir a productores de frutas y verduras informar los productos que tienen para vender.

Por otro lado, debe servir al cliente para también ver dichos productos, además de subir formularios donde ingresar pedidos de frutas/verduras, de modo que los productores puedan ver estos pedidos.

Para esto, se nos pide codificar los siguientes archivos .html:

* index.html
* agregar-producto.html
* ver-productos.html 
* informacion-producto.html
* agregar-pedido.html
* ver-pedidos.html
* informacion-pedido.html

Estos archivos irán acompañados de sus respectivos archivos .css y .js, para añadir estilización y funcionalidad a nuestros archivos .html, respectivamente.

En vista de esto, el siguiente README tiene el propósito de explicar ciertas decisiones tomadas a lo largo del desarrollo de esta Tarea. Iremos avanzando archivo por archivo.

### index.html

El logo es completamente original, creado en Canva, y el estilo escogido hereda colores utilizados en el logo, además de basarse muy vagamente en un template encontrado en Google ([Referencia](https://www.zoho.com/forms/templates/business-forms/bug-tracker.html)). Al comienzo de mi trabajo se parecía más al form de la plantilla, pero finalmente me decidí por un borde grueso de color salmón.

### agregar-producto.html // agregar-pedido.html

* Tipo producto / Produto: Hice un menú de selección como pedía el enunciado, además de dos botones. El menú tiene 3 opciones, donde dos son "frutas" y "verduras", y la tercera es una opción predeterminada, de forma que si se escoge frutas o verduras, aparecen 2 botones para aumentar la cantidad de frutas/verduras a inscribir, además de menús de selección acorde a la cantidad escogida, donde se puede escoger entre la variedad de frutas y verduras disponibles en el anexo del enunciado. Podría haber hecho un solo selector con opción múltiple, pero no me gustaba el producto final.

* Descripción: En el HTML sale que es una textArea de 48 columnas, pero por alguna razón, si colocaba 'rows=50', se podían escribir un total de 52 caracteres por línea, por lo que tuve que reducirlo a 48 para que fueran 50 caracteres.

* Región / Comuna: Una función del tipo .js valida que la opción escogida en Región no sea la predeterminada. Dependiendo de la Región escogida, en el menú de selección de Comuna aparecen las opciones correspondientes: si la región tiene valor "", entonces el menú de comunas aparece vacío.

* Nombre / Email / Número Celular: Verifiqué que tuvieran sus largos máximos correspondientes (80/30/15 caracteres), además de que el nombre tenga un mínimo de 3 caracteres. Para el email simplemente validé con un regex que el correo contenga un @ en alguna parte, y para el número de celular decidí, por simplicidad y ambiguedad del enunciado (el cuál será citado), apegarme al formato chileno para celulares (+569XXXXXXXX), el cuál validé con un regex que verifica que comience con '+569', seguido de exactamente 8 dígitos, sin espacios:

> Cumplir con el formato de número de teléfono móvil.

#### Consideraciones:

El formulario siempre es visible, incluso estando previos a confirmar el envío del formulario, donde las opciones se desactivan mientras uno no confirme el envío, y permanecen desactivadas si uno confirma enviar las respuestas (vuelve a estar disponible después de volver a index.html, desde donde podemos volver a agregar-producto.html y enviarlo de nuevo). No obstante, por temas de tiempo, decidí dejar incompleta esta funcionalidad, por lo que uno si puede modificar la cantidad de frutas/verduras y las opciones que uno escoja de éstas mismas, aunque no puede modificar si quiere inscribir frutas y verduras, solo la cantidad y nombres. 

Por otro lado, los botones para cambiar la cantidad de frutas/verduras a ingresar contienen sus propios mensajes de error (no escoger más de 5 frutas/verduras y al menos una), pero el mensaje no desaparece hasta que se vuelve a cambiar la cantidad, por lo que uno podría forzar que aparezca el mensaje, continuar respondiendo el formulario para 1 o 5 productos, y el mensaje quedaría ahí incluso después de enviado el formulario. Nuevamente, se decidió no arreglar esto en favor de cumplir con las funcionalidades solicitadas.

Finalmente, para agregar-producto.html, no logré hacer que solo el botón de "Elegir archivos" sirviera para subir archivos, por lo que hacer click en su Label o en el contenedor gris donde está el boton para subir las fotos también abre una interfaz para subir fotos.

### ver-productos.html // ver-pedidos.html

En ambos archivos, cuando uno hace click a una de las filas, siempre se muestra el mismo contenido dentro de informacion-producto.html / informacion-pedido.html puesto que el enunciado resulta ambiguo a la hora de hablar del tópico:

> Para esta tarea invente los datos y muestre 5 filas de información. La columna “fotos” debe incluir una imagen de tamaño 120x120 píxeles. Al hacer clic sobre una fila del listado, debe mostrar el archivo informacion-producto.html incluyendo de forma ordenada toda la información de un producto.

> Al hacer clic sobre una fila del listado, debe mostrar el archivo informacion-pedido.html incluyendo de forma ordenada toda la información de un pedido.

En ambas instancias se menciona "toda la información de un pedido", pero no específicamente si es el pedido al cual hicimos click, o si debe ser algo genérico para asegurarse de que el formato sea el adecuado. Sumado a esto, nos mencionan lo siguiente para ver-productos:

> Para el caso de las fotos, debe mostrar una imagen de tamaño 640x480 pixeles y al hacer clic sobre ella se debe mostrar de tamaño 1280x1024 pixeles.

Puesto que no nos dicen si debe abrir específicamente el archivo de la foto (tipo .png, .jpeg, etc.), asumí que podría simplemente alternar entre las fotos dentro de informacion-producto.html, lo cual logré mediante una función de Javascript.

Por algún motivo que desconozco, esto no funciona al primer click, sino que del segundo click en adelante se comienzan a alternar en resolución, estando inicialmente a la vista la versión de la imagen en resolución 640x480px, y si uno hace click a la foto, ésta alterna con su versión de 1280x1024px.

### Anexo

Las regiones y comunas por región se obtuvieron de la siguiente [página](https://www.bcn.cl/siit/mapoteca/comunas), parte de la BCN (Biblioteca del Congreso Nacional de Chile).

Con respecto a las imágenes utilizadas para frutas y verduras, todas se extrajeron como fotos de licencia gratuita desde Freepik. Adjunto el link para cada foto con el link del Autor de dicha imagen:

1. [Kiwi/Limón/Naranja/Pomelo](https://www.freepik.es/foto-gratis/vista-superior-pomelo-organico-kiwi-lima_7280108.htm#fromView=search&page=1&position=6&uuid=cd3d1c23-56ad-4026-b4f3-3f6e8191704d) (Autor: [freepik](https://www.freepik.es/autor/freepik))

2. [Frambuesas](https://www.freepik.es/foto-gratis/frambuesas-dispuestas-crear-fondo-visualmente-atractivo_135010097.htm#fromView=search&page=2&position=6&uuid=cd3d1c23-56ad-4026-b4f3-3f6e8191704d) (Autor: [rorozoa](https://www.freepik.es/autor/rorozoa))

3. [Cereza/Frambuesa/Frutilla/Naranja/Uva](https://www.freepik.es/foto-gratis/vista-superior-fruta-variada_903081.htm#fromView=search&page=2&position=48&uuid=cd3d1c23-56ad-4026-b4f3-3f6e8191704d) (Autor: [jcstudio](https://www.freepik.es/autor/jcstudio))

4. [Kiwi](https://www.freepik.es/foto-gratis/primer-plano-rodajas-fruta-kiwi-verde_3077291.htm#fromView=search&page=5&position=2&uuid=cd3d1c23-56ad-4026-b4f3-3f6e8191704d) (Autor: [rawpixel.com](https://www.freepik.es/autor/rawpixel-com))

5. [Champiñon/Pimiento/Tomate](https://www.freepik.es/foto-gratis/tomates-champinones-pimientos-vista-superior_10300514.htm#fromView=search&page=1&position=35&uuid=54c3fc5e-715d-4f52-aeb4-03b6be3d4fdf) (Autor: [freepik](https://www.freepik.es/autor/freepik))

Si bien en los términos de Freepik no se permite la transformación de imágenes, no especifican a qué se refiere esto, por lo que decidí creer que modificar la resolución de la imagen no cuenta como transformar de gran manera la foto, además de que no perjudica de ninguna manera a los Autores, siendo usadas con fines exclusivamente educativos.

Las fotos se encuentran todas en una carpeta llamada 'jpg'. Las usadas para la tarea tendrán como nombre las frutas/verduras de la foto y su resolución (Ej: 'fruta 640x480'), mientras que las originales tienen de nombre únicamente las frutas/verduras que las definen (Ej: 'verdura1 verdura2').