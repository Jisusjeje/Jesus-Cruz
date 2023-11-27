document.addEventListener("DOMContentLoaded", function () {
    const btnIngresar = document.getElementById("btnIngresar");
    btnIngresar.addEventListener("click", function () {
        // Lógica de inicio de sesión
        const correo = document.getElementById("txtCorreo").value;
        const contrasenna = document.getElementById("txtContrasenna").value;

        // Aquí deberías realizar la lógica de validación y autenticación
        // por ejemplo, enviando los datos a un servidor mediante AJAX

        // Simulación de inicio de sesión exitoso
        const loginExitoso = true;

        if (loginExitoso) {
            // Redirige a la página de éxito (cambia "pagina-exito.html" por la URL deseada)
            window.location.href = "musica/inicio.html";
        } else {
            // Aquí puedes manejar el caso en el que el inicio de sesión no fue exitoso
            console.log("Inicio de sesión fallido");
        }
    });
});
