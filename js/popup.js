document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup');
  const cerrarBtn = document.getElementById('cerrarPopup');
  if (!popup || !cerrarBtn) {
    return;
  }

  const abrirBtns = document.querySelectorAll('#abrirPopup, #abrirPopupFooter');
  abrirBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      popup.classList.remove('popup-oculto');
    });
  });

  cerrarBtn.addEventListener('click', function () {
    popup.classList.add('popup-oculto');
  });

  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.classList.add('popup-oculto');
    }
  });
});
