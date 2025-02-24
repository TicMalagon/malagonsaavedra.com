// Seleccionamos elementos principales
const track = document.getElementById('slider-track');
const slides = Array.from(track.children);
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Clonamos todos los slides y los agregamos al final para crear un bucle
const slidesCount = slides.length;
for (let i = 0; i < slidesCount; i++) {
  const clone = slides[i].cloneNode(true);
  track.appendChild(clone);
}

// Variables de control
let offset = 0;           // Desplazamiento actual
let speed = 0.8;          // Velocidad de movimiento (px/frame) - un poco más rápida
let singleSetWidth = 0;   // Ancho total de la tanda original

// Calcula el ancho de la tanda original (primera tanda)
function calculateWidths() {
  singleSetWidth = 0;
  for (let i = 0; i < slidesCount; i++) {
    // Ancho del slide + gap (gap=60px en CSS)
    const slideWidth = slides[i].getBoundingClientRect().width;
    singleSetWidth += (slideWidth + 60);
  }
  // Quita 60 si no deseas sumarle el último gap
}

// Función para animar el movimiento continuo
function animate() {
  offset += speed; 
  if (offset >= singleSetWidth) {
    // Cuando se supera la primera tanda, reseteamos para bucle infinito
    offset = 0;
  }
  track.style.transform = `translateX(-${offset}px)`;
  requestAnimationFrame(animate);
}

// Mover manualmente: saltos de 200px (ajusta a tu gusto)
function moveNext() {
  offset += 200;
  if (offset >= singleSetWidth) {
    offset = offset - singleSetWidth;
  }
  track.style.transform = `translateX(-${offset}px)`;
}

function movePrev() {
  offset -= 200;
  if (offset < 0) {
    offset = singleSetWidth + offset;
  }
  track.style.transform = `translateX(-${offset}px)`;
}

// Listeners para botones de navegación manual
btnNext.addEventListener('click', moveNext);
btnPrev.addEventListener('click', movePrev);

// Recalcular ancho al cambiar tamaño de ventana
window.addEventListener('resize', () => {
  // Guarda la proporción actual
  const ratio = offset / singleSetWidth;
  calculateWidths();
  // Reajusta offset manteniendo la proporción
  offset = ratio * singleSetWidth;
});

// Inicia el carrusel
calculateWidths();
requestAnimationFrame(animate);
