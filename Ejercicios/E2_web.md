# Ejercicio 2
**Nombre**: Mario Ignacio Benavente Cerro

---

## Observaciones
Tenga en cuenta las siguientes observaciones al realizar el ejercicio:

- El ejercicio es de carácter **personal**; la copia será penalizada con **nota mínima**.
- De ser necesario investigar, usted esta **autorizado a utilizar internet** como herramienta. Sin embargo, **debe citar** toda fuente que utilice para responder las preguntas.
- El uso de modelos generativos de lenguaje como **ChatGPT está estrictamente prohibido** y será penalizado con **nota mínima**

## Pregunta 1

¿Qué es el ataque de "Cross Site Scripting" (XSS) y cómo podría prevenirse? Describa un escenario en el cual este tipo de ataque podría ser especialmente peligroso. Para responder esta pregunta, puede basarse en [este articulo de la OWASP](https://owasp.org/www-community/attacks/xss/).

**Respuesta**:

**¿Qué es el ataque de "Cross Site Scripting?**

Un ataque de Cross Site Scripting (XSS) consiste en que un atacante envía código malicioso generalmente en forma de un script paralelo al navegador hacia algún usuario de la página que esté desprevenido, con tal de obtener datos como contraseñas, tokens de sesión, cookies, información sensible, etc. Dichos scripts pueden incluso llegar a modificar el contenido HTML de la página.

Un ataque de este tipo puede ocurrir cuando existe información que entra a la página por medios poco confiables mediante una solicitud de la página, o en data incluída en contenido dinámico que se envía al usuario sin ser revisado antes para prevenir que contenga algo malicioso.

**¿Cómo puede prevenirse?**

El razonamiento detrás de prevenir un ataque XSS radica en que el atacante debe ser capaz de inyectar código malicioso dentro del HTML para luego llamar a un script. Algunas maneras de prevenir ataques de tipo XSS incluyen, entre otras:

1. Utilizar "HTML Entity Encoding": utilizar equivalentes en caracteres a símbolos que, generalmente, tienen significado en HTML y podrían llevar a que un atacante inyecte código (Ej: en vez de utilizar el símbolo <, o 'menor que', usar su equivalente, `&lt`, permite que HTML de igual manera lo muestre como el símbolo al que refiere, sin poder ser utilizado como el comienzo de una etiqueta de HTML).

2. Colocar variables entre comillas: usar `'let'` o `"let"` en vez de la variable suelta dificulta que el atacante cambie el contexto en el cual la variable puede ser utilizada, entorpeciendo la inyección de código malicioso.

3. Codificar los caracteres usando el formato `\xHH`: permite que contextos de Javascript como onClick (al clickear un elemento) o hover (al posar el mouse sobre un elemento) funcionen en contextos no modificables por usuarios externos.

4. Usar variables solamente en un valor "property" de CSS, evitando otros contextos de CSS.

5. Codificar URLs usando el formato `%HH` para evitar modificaciones a hyperlinks.

6. Si una página permite que el usuario modifique el estilizado de la misma, sanitizar el HTML ingresado por el usuario, eliminando cualquier tramo peligroso de HTML y retornar un 'string' seguro.

7. Utilizar "Safe Sinks" o atributos seguros de HTML, que interpretan las variables que les atribuyas como texto y no como código HTML, previniendo cualquier tipo de ataque XSS.

**¿En qué situación un ataque XSS podría ser especialmente peligroso?**

Supongamos tenemos código que consulta una base de datos en búsqueda del ID de un empleado de una compañía, y retorna el nombre de dicho empleado.

Normalmente esto no sería un problema si es una base de datos normada, pero en el caso de un ataque XSS Almacenado, puede darse el caso de que los datos almacenados hayan sido ingresados por usuarios, y si no se colocan medidas para prevenir que nombres de empleados contengan código malicioso, nada evita que visitas subsecuentes a la página ejecuten dicho código, pudiendo comprometer la seguridad de quienes visiten la página. El problema especialmente en este caso radica en que el almacenamiento de datos genera un desvío del código, generando dificultades a la hora de identificar la amenaza y, en consecuencia, aumentando las probabilidades de que el ataque funcione en múltiples usuarios.

## Pregunta 2
Como se mencionó en auxiliar, existen varias herramientas que se pueden utilizar para programar aplicaciones web más complejas que las que hemos visto en el curso. Esta pregunta busca que ud. investigue 3 librerías de javascript o *frameworks* de front-end y describa sus principales características, ventajas, desventajas y ejemplos de uso. Finalmente, indique cuál de las tecnologías presentadas utilizaria para implementar su página web personal y por qué.

**Nota:** Se espera que ud. escriba un breve resumen de cada tecnología, seguido de al menos 2 ventajas y 2 desventajas de cada una.

**Respuesta**:

* React: es un framework desarrollado por Meta, el cual es una librería de Javascript 'open-source' de las más utilizadas por desarrolladores web, el cual entrega opciones para construir una interfaz de usuario desde cero.
    * Ventajas:
        1. Arquitectura basada en componentes: permite reutilizar componentes, los cuales no afectan otras partes del diseño ni la interfaz de usuario, permitiendo fácilmente administrar y modificar el código y diseño de la página.
        2. Enorme ecosistema: dada su alta cantidad de usuarios, genera un ambiente con miles de personas con las cuales compartir y ayudarse, creando una comunidad llena de librerías de terceros hechas para funcionar en conjunto con este framework.
    * Desventajas:
        1. Difícil para principiantes: herramientas como JSX (JavaScript Syntax eXtension), que permiten la creación de elementos HTML dentro de Javascript para su posterior uso en el DOM (Document Object Model o la estructura de un documento HTML) o manejo de estados.
        2. Cambios constantes: el framework recibe constantes actualizaciones que cambian la manera en la que éste es usado, por lo que developers deben estar al tanto sobre la mejor manera de usar cierto código en el momento de su implementación.

* Angular: Es un framework mantenido por Google, escrito en TypeScript (extensión de JavaScript hecha por Microsoft, llena de nuevas herramientas como tipos estáticos y objetos basados en clases) y usado principalmente para aplicaciones de una página.
    * Ventajas:
        1. TypeScript: ya mencionamos algunas ventajas anteriormente. Sumado a éstas, mejora la calidad y rapidez para detectar errores en el código.
        2. Es eficiente: algunas de sus funciones son automáticas, como por ejemplo 'code-splitting', o el concepto de separar el código en cúmulos que pueden luego ejecutarse según sea necesario, facilitando el testeo de código y simplificando este proceso.
    * Desventajas:
        1. SEO limitado: el SEO (Search Engine Optimization u optimización del motor de búsqueda) realizable en Angular es limitado puesto que este framework corre aplicaciones de una sola página.
        2. Complejidad: Angular tiene tantas herramientas y opciones que puede resultar engorroso trabajar con éste para aplicaciones sencillas. Funciona mejor una vez dominadas estas herramientas, y para aplicaciones más complejas, con tal de sacarle el máximo provecho al framework.

* Vue.js: Es un framework desarrollado por un solo individuo (Evan You), útil para facilitar el proceso de creación de aplicaciones de una sola página, al igual que Angular.
    * Ventajas:
        1. Fácil de usar: depende únicamente de Javascript y es fácil de integrar, lo que quita del escenario tener que aprender a usar otras herramientas.
        2. Muy buena documentación: el framework está completamente documentado, de forma clara e intuitiva, facilitando el aprendizaje.
    * Desventajas:
        1. Comunidad pequeña: es más nuevo que otros frameworks existentes y, como el desarrollador recibe financiamiento de empresas pequeñas y particulares, no tiene tanto respaldo. Sumado a esto, la mayoría de la comunidad proviene de China, dificultando su uso para desarrolladores hispanohablantes.
        2. Demasiado flexible: podría dificultar el trabajo en equipo, dado que es muy fácil que cada individuo trabaje con un estilo personal de codificación, entorpeciendo de sobremanera el trabajo si el proyecto escalara (más personas implican más problemas).

Principal fuente para la P2: [Frontend Framework Showdown: Exploring the Pros and Cons of React, Angular, and Vue.js](https://medium.com/@ironhack/frontend-framework-showdown-exploring-the-pros-and-cons-of-react-angular-and-vue-js-6a75f3a7690f)