document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            $('#carruselPrincipal').carousel(index);
        });
    });

    document.getElementById('botonVolver').addEventListener('click', function() {
       window.history.back();
    });

    document.getElementById('botonSalir').addEventListener('click', function() {
      window.location.href = "https://www.linkedin.com/in/patricio-gallardo-017880351";                                
    });
});
