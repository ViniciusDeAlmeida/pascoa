let ovoVerde = document.querySelector("div");
let menuCoelho = document.querySelector("section");


function abrirMenu(){
  ovoVerde.classList.toggle("abrirMenu");

}

menuCoelho.onclick = abrirMenu;

