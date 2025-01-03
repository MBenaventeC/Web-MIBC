# Ejercicio 4: "*Unrestricted File Upload*"

**Nombre**: Mario Ignacio Benavente Cerro

--- 
## Introduccion
Hemos enfatizado la importancia de ser extremadamente cautelosos en el manejo de la entrada de los usuarios, incluyendo los archivos. De hecho, la vulnerabilidad [*Unrestricted File Upload*](https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload), la cual corresponde a confiar plenamente en los archivos subidos por el usuario, puede tener consecuencias catastróficas.

El objetivo de este ejercicio es comprender bien las posibles **consecuencias** de un manejo de archivos "mediocre" y las formas de **prevenirlas**.

### Pregunta 1
Investigue y explique **con sus propias palabras** 3 posibles ataques que un usuario malicioso podria realizar a una aplicacion web con la vulnerabilidad *Unrestricted File Upload*". Se espera que para cada ataque se mencionen las **consecuencias** del mismo.

**Respuesta:**

1) Subir un archivo con nombre o dirección maliciosas (Ejemplos en Windows: `CON`, `PRN`, `AUX`, `NUL`, `COM[X]`, `LPT[X]`, con X un número del 1 al 9) puede sobreescribir archivos vitales, críticos para el funcionamiento del servidor.

    En casos donde el validador de nombres y extensiones no sea capaz de reconocer que el archivo existe y trate de guardarlo en el servidor bajo una extensión distinta al del archivo original, puede gatillarse un ataque de Denegación de Servicios ('Denial of Service', DoS).

2) Es posible que una verificación débil de extensiones en la aplicación permita a un atacante subir archivos con nombres que logren pasar la validación de extensiones al hacerse pasar por un tipo de archivo que no son. Ejemplos incluyen:

    - Aprovechar que el validador usa la primera extensión que encuentra después de un punto (".") (ej: `file.txt.jpg.php`)
    - Usar delimitadores como "/" o ";" (ej: `file.asp;.jpg`)
    - Crear directorios usando un nombre de carpeta que contenga la extensión prohibida (ej: `folder.asp\file.txt`)

    Eeste 'bypass' permite al atacante ejecutar código arbitrario como PHP o HTML y desde ahí llevar a cabo su ataque (robar información sensible, alterar la página web para motivos como Phishing, etc).

3) Si la aplicación utiliza funciones (o APIs) para revisar el tipo de archivo, es posible que el atacante logre atravesar esta revisión:

    - Es posible verificar hasta dónde lee el validador de extensión, y ocultar código malicioso en el resto del nombre, o incluso en el metadata del archivo.
    - Es posible ofuscar/encriptar la información insertada si la aplicación solamente detecta código malicioso mediante patrones identificables (si el atacante conoce los patrones, puede aprovecharse de eso)
    - Uno puede crear un archivo específicamente para que ejecute código malicioso si la aplicación lo comprime (el archivo compacto lo ejecuta, no la versión sin comprimir)

    Como indican las opciones que se presentan al atacante, es posible que el atacante pueda hacer que código malicioso se ejecute dentro del servidor, e incluso obtener acceso al mismo.

### Pregunta 2
Ahora que ya tenemos claro que descuidar el manejo de archivos es peligroso, les pedimos listar 5 metodos preventivos para esta vulnerabilidad.

**Respuesta:**

1) Solamente aceptar caracteres alfanuméricos en el nombre y extensión de los archivos, al igual que un único punto (".") para delimitar la extensión (la cual debe ser no vacía). Es posible verificar esto mediante la expresión regular `^\[a-zA-Z0-9\]{1,200}\\.\[a-zA-Z0-9\]{1,10}$`

2) Limitar los archivos a un largo máximo para el nombre más su extensión, al igual que un tamaño mínimo y máximo para los archivos (para evitar ataques DDoS)

3) De ser posible, guardar los archivos que suben los usuarios en una base de datos en vez del sistema de archivos del servidor. Si debe ser en 'filesystem', considerar guardarlos en un servidor aislado con un dominio distinto

4) Asegurar que archivos de doble o multiple extensión no puedan ser ejecutados, especialmente en [*Apache*](https://httpd.apache.org/)

5) En casos donde sea aplicable, utilizar un escáner de virus de lado del servidor. Si los datos no son confidenciales, se puede incluso utilizar un sitio gratis de escaneo de virus en archivos (en este caso, primero deben guardarse los archivos en el servidor bajo un nombre aleatorio y sin extensión, y una vez el escáner se asegure que no posee virus, devolverle su nombre y extensión correspondientes)