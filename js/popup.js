document.addEventListener('DOMContentLoaded', function () {
  const abrirBtn = document.getElementById('abrirPopup');
  const cerrarBtn = document.getElementById('cerrarPopup');
  const popup = document.getElementById('popup');
  if (!abrirBtn || !cerrarBtn || !popup) {
    console.warn("No se encontró uno de los elementos del popup.");
    return;
  }
  abrirBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.remove('popup-oculto');
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
