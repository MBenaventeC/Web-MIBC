// Creamos selectores para las versiones en tamaño mediano y grande de cada imagen
const fotosM = document.querySelectorAll(".foto-medium");
const fotosL = document.querySelectorAll(".foto-large");

// Onclick: Si hacemos click a una foto de tamaño mediano, la ocultamos en reemplazo de su versión tamaño grande
fotosM.forEach((fotoM, index) => {
    fotoM.addEventListener("click", () => {
        const fotoL = fotosL[index];
        if (fotoM.style.display === "block") {
            fotoM.style.display = "none";
            fotoL.style.display = "block";
        }
    });
});

// Onclick: Si hacemos click a una foto de tamaño grande, la ocultamos en reemplazo de su versión tamaño mediano
fotosL.forEach((fotoL, index) => {
    fotoL.addEventListener("click", () => {
        const fotoM = fotosM[index];
        if (fotoL.style.display === "block") {
            fotoL.style.display = "none";
            fotoM.style.display = "block";
        }
    });
});