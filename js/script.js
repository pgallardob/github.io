document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const carouselItems = document.querySelectorAll('#carruselPrincipal .carousel-item');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            carouselItems.forEach(item => {
                item.classList.remove('active');
            });
            carouselItems[index].classList.add('active');
        });
    });
    document.getElementById('botonVolver').addEventListener('click', function() {
       window.history.back();
    });
    document.getElementById('botonSalir').addEventListener('click', function() {
      window.location.href = "https://www.linkedin.com/in/patricio-gallardo-017880351";                                
    });
});