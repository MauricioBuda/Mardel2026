import confetti from 'canvas-confetti';

// Seleccionamos todos los días
const dias = document.querySelectorAll('.div-calendario .dia');

// Seleccionamos modal y sus elementos
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalActividades = document.getElementById('modal-actividades');
const cerrarBtn = document.querySelector('.cerrar');

// Datos detallados por día (puedes editar estos)
const detallesDias = {
  "Sábado 23": [
    "Salimos tipo 09 hs de casita",
    "Paramos en La Matera Lezama a almorzar",
    "Deberíamos llegar tipo 15 o 16 hs y vamos a hacer compra general",
    "Para cenar pedimos delibery",
  ],
  "Domingo 24": [
    "Almorzamos en Crossi!!",
    "Jugamos 20 lineas de bowling je",
  ],
  "Lunes 25": [
    "Merendamos en Little Ofelia",
    "Vamos a ver el mar con el tapir",
    "Las olas y el viento sucundum sucundum",
  ],
  "Martes 26": [
    "Comemos acai viendo el mar ♥",
    "Cenamos en nuestro barcito",
  ],
  "Miércoles 27": [
    "Masajes 15 hs en 14 de julio 2486",
    "Merienda en Heraldooo!",
  ],
  "Jueves 28": [
    "Visita a Luccianos 10 hs",
    "Posiblemente nos llenemos ahi asi que no almorzaríamos",
    "Sale esa siesta furiosa",
    "Manolito",
    "Sacoa!",
    "Bingo a recuperar biyuyaaa"
  ],
  "Viernes 29": [
    "Visitamos a los parientes de la gordi (puerto)",
    "Merendamos en Dinette",
    "Barcitoooo"
  ],
  "Sábado 30": [
    "En general, pachorra",
    "Acai de nuevo je",
    "Bowling 17 hs"
  ],
  "Domingo 31": [
    "Limpieza y armado de valijas :(",
    "Vueltita a casa!",
  ],
  "Lunes 1": [
    "Re-conectamos con nuestro cuchitril!!",
    "Lavamos ropa",
    "Lloramos ahre"
  ],
};

// Abrir modal al hacer click en un día
dias.forEach(dia => {
  dia.addEventListener('click', () => {
    const titulo = dia.querySelector('h2').textContent.trim();
    console.log(titulo.substring(0, 6));
    modalTitulo.textContent = titulo;

    // Limpiar actividades previas
    modalActividades.innerHTML = "";

    // Mostrar actividades detalladas
    const actividades = detallesDias[titulo] || [];
    actividades.forEach(act => {
      const div = document.createElement('div');
      div.textContent = act;
      div.style.marginBottom = "8px";
      modalActividades.appendChild(div);
    });

    // Mostrar modal
    modal.style.display = "flex";
  });






  
// Función confeti

dia.addEventListener('click', () => {
  const titulo = dia.querySelector('h2').textContent.trim();
  modalTitulo.textContent = titulo;

  modalActividades.innerHTML = "";
  const actividades = detallesDias[titulo] || [];
  actividades.forEach(act => {
    const div = document.createElement('div');
    div.textContent = act;
    div.style.marginBottom = "8px";
    modalActividades.appendChild(div);
  });

  modal.style.display = "flex";

  // Lanzar confeti cada vez que se abre
  lanzarConfeti();
});





// CONFETI

function lanzarConfeti() {
  const duration = 6 * 1000; // Duración total en ms
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2000 };

  const colors = ['#ff0a54', '#5647ffff', '#FF1493', '#ffffffff', '#99FF99', '#000000ff', '#ffe066', '#00b4d8', '#f6ff00ff'];

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 10 + Math.floor(Math.random() * 10);

    // Lanzar confeti desde posiciones aleatorias a lo ancho
    confetti(Object.assign({}, defaults, {
      particleCount,
      colors,
      origin: { x: Math.random(), y: Math.random() * 0.9 } // empieza desde arriba hasta 60% del alto
    }));
  }, 250);
}





});

// Cerrar modal al tocar la X
cerrarBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer click afuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});




