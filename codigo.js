console.log("SE CARGA EL CODIGO");

window.addEventListener("DOMContentLoaded",(event)=>{
    console.log("DOM cargado");

    const menuBTtn = document.getElementById("menu");
    const nav =document.querySelector ("header nav");

    menuBTtn.addEventListener("click",(event)=> {
        menuBTtn.classList.toString("salir");
        nav.classList.toggle("visible"); 

    })
});