tupla1 = document.getElementById("fila1");
tupla2 = document.getElementById("fila2");
tupla3 = document.getElementById("fila3");
tupla4 = document.getElementById("fila4");
tupla5 = document.getElementById("fila5");

const gotoInformacionPedido = () => {
    window.location.href = "informacion-pedido.html";
}

tupla1.addEventListener("click", gotoInformacionPedido);
tupla2.addEventListener("click", gotoInformacionPedido);
tupla3.addEventListener("click", gotoInformacionPedido);
tupla4.addEventListener("click", gotoInformacionPedido);
tupla5.addEventListener("click", gotoInformacionPedido);