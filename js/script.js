document.addEventListener('DOMContentLoaded', function () {
  const galeriaItems = document.querySelectorAll('.galeria-item img');
  const overlay = document.getElementById('fullscreenOverlay');
  const fullscreenImg = document.getElementById('fullscreenImg');
  const botonVolver = document.getElementById('botonVolver');

  if (botonVolver) {
    botonVolver.addEventListener('click', function () {
      window.history.back();
    });
  }

  const botonSalir = document.getElementById('botonSalir');
  if (botonSalir) {
    botonSalir.addEventListener('click', function () {
      window.location.href = "https://www.google.cl";
    });
  }

  galeriaItems.forEach(img => {
    img.addEventListener('click', () => {
      fullscreenImg.src = img.src;
      fullscreenImg.alt = img.alt;
      overlay.style.display = 'flex';
      overlay.focus();
    });
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      fullscreenImg.src = '';
      fullscreenImg.alt = '';
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && overlay && overlay.style.display === 'flex') {
      overlay.style.display = 'none';
      fullscreenImg.src = '';
      fullscreenImg.alt = '';
    }
  });
});

function toggleReadMore(btn) {
  var text = btn.previousElementSibling;
  if (text.classList.contains('collapsed')) {
    text.classList.remove('collapsed');
    btn.textContent = 'Leer menos';
  } else {
    text.classList.add('collapsed');
    btn.textContent = 'Leer más';
  }
}
