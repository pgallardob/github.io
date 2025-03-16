$(document).ready(function() {
    $('#generate').click(function() {
        var phone = $('#phone').val();
        var message = $('#message').val();
        var url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);

        $('#qrcode').empty(); // Limpiar el código QR anterior
        $('#qrcode').qrcode(url); // Generar el nuevo código QR
    });

    // Función para cerrar la pestaña
    $('#closeButton').click(function() {
        window.close(); // Cierra la pestaña actual
    });
});
