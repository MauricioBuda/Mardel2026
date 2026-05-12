// Fechas de las vacaciones
const fechas = [
  '2026-05-23', // sábado
  '2026-05-24',
  '2026-05-25',
  '2026-05-26',
  '2026-05-27',
  '2026-05-28',
  '2026-05-29',
  '2026-05-30',
  '2026-05-31',
  '2026-06-01', 
];

const calendario = document.getElementById('calendario');

// fechas.forEach(fechaStr => {
//   const date = new Date(fechaStr);
//   const options = { weekday: 'long', day: 'numeric', month: 'long' };
//   const nombreDia = date.toLocaleDateString('es-ES', options);

//   const diaDiv = document.createElement('div');
//   diaDiv.className = 'dia';

//   const titulo = document.createElement('h2');
//   titulo.textContent = nombreDia;
//   diaDiv.appendChild(titulo);

//   const actividadesDiv = document.createElement('div');
//   actividadesDiv.className = 'actividades';
//   diaDiv.appendChild(actividadesDiv);

//   // Ejemplo de actividad
//   const actividad = document.createElement('div');
//   actividad.textContent = "Agregar actividad aquí";
//   actividad.style.fontSize = '14px';
//   actividad.style.color = '#333';
//   actividadesDiv.appendChild(actividad);

//   calendario.appendChild(diaDiv);
// });
