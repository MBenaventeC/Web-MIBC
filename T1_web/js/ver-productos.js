tupla1 = document.getElementById("fila1");
tupla2 = document.getElementById("fila2");
tupla3 = document.getElementById("fila3");
tupla4 = document.getElementById("fila4");
tupla5 = document.getElementById("fila5");

const gotoInformacionProducto = () => {
    window.location.href = "informacion-producto.html";
}

tupla1.addEventListener("click", gotoInformacionProducto);
tupla2.addEventListener("click", gotoInformacionProducto);
tupla3.addEventListener("click", gotoInformacionProducto);
tupla4.addEventListener("click", gotoInformacionProducto);
tupla5.addEventListener("click", gotoInformacionProducto);