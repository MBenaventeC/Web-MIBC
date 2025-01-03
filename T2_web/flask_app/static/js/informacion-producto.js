const fotoM = document.getElementById("foto-m");
const fotoL = document.getElementById("foto-l");

const cambiarTamano = () => {
    console.log("test");
    if (fotoM.style.display === "block") {
        fotoM.style.display = "none";
        fotoL.style.display = "block";
    } else {
        fotoM.style.display = "block";
        fotoL.style.display = "none";
    }
}

fotoM.addEventListener("click", cambiarTamano);
fotoL.addEventListener("click", cambiarTamano);