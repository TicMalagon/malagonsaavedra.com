// Carrusel Clientes
const track    = document.getElementById('slider-track');
const slides   = Array.from(track.children);
const btnPrev  = document.getElementById('btn-prev');
const btnNext  = document.getElementById('btn-next');
const slidesCount = slides.length;

// Clonar para bucle infinito
for (let i = 0; i < slidesCount; i++) {
  track.appendChild(slides[i].cloneNode(true));
}

let offset = 0, speed = 0.8, singleSetWidth = 0;

function calculateWidths() {
  singleSetWidth = 0;
  for (let i = 0; i < slidesCount; i++) {
    const w = slides[i].getBoundingClientRect().width;
    singleSetWidth += w + 60; // gap
  }
}

function animate() {
  offset += speed;
  if (offset >= singleSetWidth) offset = 0;
  track.style.transform = `translateX(-${offset}px)`;
  requestAnimationFrame(animate);
}

function moveNext() {
  offset = (offset + 200) % singleSetWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

function movePrev() {
  offset = (offset - 200 + singleSetWidth) % singleSetWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

btnNext.addEventListener('click', moveNext);
btnPrev.addEventListener('click', movePrev);

window.addEventListener('resize', () => {
  const ratio = offset / singleSetWidth;
  calculateWidths();
  offset = ratio * singleSetWidth;
});

calculateWidths();
requestAnimationFrame(animate);
