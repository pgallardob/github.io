document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail'); // Selecciona todas las miniaturas
    const carouselItems = document.querySelectorAll('#carruselPrincipal .carousel-item'); // Selecciona todos los elementos del carrusel

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Obtener el índice de la miniatura clicada
            const index = this.getAttribute('data-index');

            // Remover la clase 'active' de todas las imágenes del carrusel
            carouselItems.forEach(item => {
                item.classList.remove('active');
            });

            // Agregar la clase 'active' a la imagen correspondiente
            carouselItems[index].classList.add('active');
        });
    });

    // Funcionalidad del botón Volver
    document.getElementById('botonVolver').addEventListener('click', function() {
        // Lógica para volver a la página anterior
        window.history.back();
    });

    // Funcionalidad del botón Salir
    document.getElementById('botonSalir').addEventListener('click', function() {
        // Lógica para salir de la aplicación o redirigir a otra página
        window.location.href = "https://www.linkedin.com/in/patricio-gallardo-017880351"; // Cambia la URL según sea necesario
                                     
    
    
    
    
    });
});