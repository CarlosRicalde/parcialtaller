
const contenedor = document.querySelector('.chocoybaston');
const imagen = document.querySelector('.foto');

function moverImagen(event) {
  const nuevaPosX = event.clientX - imagen.width / 2;
  const nuevaPosY = event.clientY - imagen.height / 2;

  contenedor.style.left = nuevaPosX + 'px';
  contenedor.style.top = nuevaPosY + 'px';
}

document.addEventListener('mousemove', moverImagen);



