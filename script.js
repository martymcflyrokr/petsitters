const botones = document.querySelectorAll('.caracteristica');
const botonEnviar = document.querySelector('.enviar');
const textoMascota = document.querySelector('.texto-mascota');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    boton.classList.toggle('presionado');
  });
});

botonEnviar.addEventListener('click', () => {
  const contenedorBotones = document.querySelector('.botones');
  contenedorBotones.style.display = 'none';

  botonEnviar.style.display = 'none';

  textoMascota.textContent = "No importa cómo sea tu mascota, nosotros la vamos a amar y cuidar. Ese es nuestro compromiso."; // Cambia el texto

  // Mostrar mensaje
  const mensaje = document.createElement('p');
  document.querySelector('.caracteristicas').appendChild(mensaje);
});