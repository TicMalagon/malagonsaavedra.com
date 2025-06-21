document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById('splash');
  const closeBtn = document.getElementById('splash-close');

  // Mostrar splash tras 2 segundos
  setTimeout(() => {
    splash.classList.add('active');
  }, 1000);

  // Al cerrar, ocultarlo hasta la siguiente recarga
  closeBtn.addEventListener('click', () => {
    splash.classList.remove('active');
  });
});
