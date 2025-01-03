# Ejercicio 1

**Nombre**: Mario Ignacio Benavente Cerro

---
## Consideraciones
- Este ejercicio se debe realizar de manera individual.
- Puede usar internet, sus apuntes y cualquier material que desee siempre y cuando las respuestas esten escritas en sus propias palabras.
- Se encuentra **totalmente prohibido** utilizar modelos generativos del lenguaje tales como ChatGPT para resolver este ejercicio. Por medio de un software especializado, se revisará que su solución no haya sido plagiada. Aquellas entregas que presenten evidencia de plagio serán calificadas con la nota mínima.


## Pregunta 1
Explique por que el realizar validaciones del input del usuario en el front-end es una caracteristica pero no una medida de seguridad. 

**Respuesta**: Realizar validaciones del input del usuario en el front-end es una característica, esto debido a que uno puede modificar lo que es el código html local de una página al presionar F12 en un navegador, o el código fuente ("source"). Más aún, uno en un formulario podría contestar ingresando algún script con motivos maliciosos/fraudulentos, lo cual nos dice que validar inputs no podría funcionar como medida de seguridad. Validar sirve precisamente para que se notifique al usuario de que se equivocó.

## Pregunta 2
Usted cuenta con el siguiente codigo HTML:
```html
<div>
    <p>Contador: <span id="contador">0</span></p>
    <button type="button" id="btn-resta">-1</button>
    <button type="button" id="btn-suma">+1</button>
</div>
```
Implemente un contador bidireccional utilizando la plantilla disponible mas abajo, solo programe donde se le indica. Se espera que tras apretar un boton, el contador se actualice sin la necesidad de recargar la pagina. **No esta permitido modificar el HTML**.

**Respuesta**:
```js
// se buscan los elementos necesarios
const restaButton = document.getElementById("btn-resta")
const sumaButton = document.getElementById("btn-suma")
const contador = document.getElementById("contador")

let n = 0; // contador

const suma = () => {
    n = n + 1
    contador.innerText = n
};

const resta = () => {
    n = n - 1
    contador.innerText = n
};
// asignar respectivamente la funciones al evento "click"
restaButton.addEventListener("click", resta)
sumaButton.addEventListener("click", suma)
```
