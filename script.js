const img = document.querySelectorAll("#img");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const parejas = ["Leticia y Chistian", 
                 "Flor y Paul",
                ""];
const myHeader = document.getElementById("myHeader").textContent;

let posicionActual = 0;

function mostrarImagen(posicion) 
{
    img.forEach(imagen => imagen.classList.remove("visible"));
    posicionActual = (posicion + img.length) % img.length;
    img[posicionActual].classList.add("visible");
    if (posicionActual < 32) 
       {document.getElementById("myHeader").textContent = parejas[0];} 
    else 
       {document.getElementById("myHeader").textContent = parejas[1]; }
    
}

btnAnterior.addEventListener("click", () => {
    mostrarImagen(posicionActual - 1); 
})

btnSiguiente.addEventListener("click", () => {
    mostrarImagen(posicionActual + 1); 
})
