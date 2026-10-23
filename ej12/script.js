"use strict";

const botonDate = document.querySelector("#btnDate");
const resultado = document.querySelector("#resultado");

function fechaEnEspanol(fecha) {
  return fecha.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function calcularEventoDate() {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  // La actividad pide un día aleatorio del 1 al 30 del mes actual.
  // Si hoy es día 31, ya no existe un día válido entre 1 y 30 en este mes;
  // para evitar un bucle infinito, se busca el evento en el mes siguiente.
  let mesEvento = hoy.getMonth();
  let anioEvento = hoy.getFullYear();
  let diaMinimo = hoy.getDate();

  if (diaMinimo > 30) {
    mesEvento++;
    if (mesEvento > 11) {
      mesEvento = 0;
      anioEvento++;
    }
    diaMinimo = 1;
  }

  // Genera un día aleatorio entre el día actual (o 1 del mes siguiente) y 30.
  const diaEvento = Math.floor(Math.random() * (31 - diaMinimo)) + diaMinimo;
  const evento = new Date(anioEvento, mesEvento, diaEvento);
  const milisegundosDia = 24 * 60 * 60 * 1000;
  const diasRestantes = Math.round((evento - hoy) / milisegundosDia);

  resultado.textContent =
    `Fecha actual: ${fechaEnEspanol(hoy)}. ` +
    `Fecha del evento: ${fechaEnEspanol(evento)}. ` +
    `Días que faltan para el evento: ${diasRestantes} día(s).`;
}

botonDate.addEventListener("click", calcularEventoDate);
