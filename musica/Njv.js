document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del DOM
    const menuBtn = document.getElementById("menu");
    const menuAbrir = document.getElementById("menu-abrir");
    const menuCerrar = document.getElementById("menu-cerrar");
    const nav = document.querySelector("nav");
  
    // Evento de clic en el botón de menú
    menuBtn.addEventListener("click", function () {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
      menuAbrir.style.display = menuAbrir.style.display === "none" ? "none" : "none";
      menuCerrar.style.display = menuCerrar.style.display === "none" ? "inline-block" : "none";
    });
  });
  