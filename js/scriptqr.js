$(document).ready(function() {
    $('#generate').click(function() {
        var phone = $('#phone').val();
        var message = $('#message').val();
        var url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
        $('#qrcode').empty(); 
        $('#qrcode').qrcode(url);
    });
    $('#closeButton').click(function() {
        window.close();
    });
});
