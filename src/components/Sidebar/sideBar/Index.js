const Icono = document.getElementById("Icono")
const barraLateral = document.querySelector(".barra-Lateral ")
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch")
const circulo = document.querySelector(".circulo")
const menu = document.querySelector(".menu")
const ll = document.querySelector("main")

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral")
    if (barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display="none"
        menu.children[1].style.display="block"

    }else{
        menu.children[0].style.display="block"
        menu.children[1].style.display="none"
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral")
        ll.classList.add("min-main")
        spans.forEach((span)=>{
            span.classList.add("oculto")
        })
    }
})

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode")
    circulo.classList.toggle("prendido")
})

Icono.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    ll.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto")
    })
})