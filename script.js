const img = document.querySelectorAll("#img");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const parejas = ["Leticia y Chistian", 
                 "Flor y Paul",
                 "Roxana y Juan Carlos"];
const myHeader = document.getElementById("myHeader").textContent;
const mysubHeader = document.getElementById("mysubHeader").textContent;

let posicionActual = 0;

function mostrarImagen(posicion) 
{
    img.forEach(imagen => imagen.classList.remove("visible"));
    posicionActual = (posicion + img.length) % img.length;
    img[posicionActual].classList.add("visible");
    if (posicionActual <= 31) 
      {document.getElementById("myHeader").textContent = parejas[0];
       document.getElementById("mysubHeader").textContent = "Matrimonio Civil";
      }
    else
        if (posicionActual > 31 && posicionActual <= 58)
          {document.getElementById("myHeader").textContent = parejas[1]
           document.getElementById("mysubHeader").textContent = "Matrimonio Civil";
          }
    else
    if (posicionActual > 58) 
      {document.getElementById("myHeader").textContent = parejas[2];
       document.getElementById("mysubHeader").textContent = "Matrimonio Civil y Religioso";
      }

}

btnAnterior.addEventListener("click", () => {
    mostrarImagen(posicionActual - 1); 
})

btnSiguiente.addEventListener("click", () => {
    mostrarImagen(posicionActual + 1); 
})
