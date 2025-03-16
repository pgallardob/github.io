document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidad del botón Volver
    document.getElementById('botonVolver').addEventListener('click', function() {
        // Lógica para volver a la página anterior
        window.history.back(); // Regresa a la página anterior en el historial
    });

    // Funcionalidad del botón Salir
    document.getElementById('botonSalir').addEventListener('click', function() {
        // Lógica para salir de la aplicación o redirigir a otra página
        // Aquí puedes cambiar la URL a la que deseas redirigir
        window.location.href = "https://www.linkedin.com/in/patricio-gallardo-017880351"; // Cambia la URL según sea necesario
    });
});