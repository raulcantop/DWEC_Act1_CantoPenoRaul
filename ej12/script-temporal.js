"use strict";

// Este archivo usa la API Temporal cuando el navegador la soporta.
// Se carga por separado para que la versión Date funcione aunque Temporal no exista.
const botonTemporal = document.querySelector("#btnTemporal");
const resultadoTemporal = document.querySelector("#resultado");

function calcularEventoTemporal() {
  if (typeof Temporal === "undefined") {
    resultadoTemporal.textContent =
      "Temporal no está disponible en este navegador. Prueba un navegador compatible o añade un polyfill de Temporal.";
    return;
  }

  const hoy = Temporal.Now.plainDateISO();
  let mesEvento = hoy.month;
  let anioEvento = hoy.year;
  let diaMinimo = hoy.day;

  // La consigna limita el día a 1–30. Si hoy es día 31, usamos el mes siguiente
  // para evitar un bucle imposible en el mes actual.
  if (diaMinimo > 30) {
    const primerDiaMesSiguiente = hoy.with({ day: 1 }).add({ months: 1 });
    mesEvento = primerDiaMesSiguiente.month;
    anioEvento = primerDiaMesSiguiente.year;
    diaMinimo = 1;
  }

  const diaEvento = Math.floor(Math.random() * (31 - diaMinimo)) + diaMinimo;
  const evento = Temporal.PlainDate.from({
    year: anioEvento,
    month: mesEvento,
    day: diaEvento
  });
  const diasRestantes = hoy.until(evento, { largestUnit: "day" }).days;

  const formato = (fecha) => fecha.toLocaleString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  resultadoTemporal.textContent =
    `Fecha actual: ${formato(hoy)}. ` +
    `Fecha del evento: ${formato(evento)}. ` +
    `Días que faltan para el evento: ${diasRestantes} día(s).`;
}

botonTemporal.addEventListener("click", calcularEventoTemporal);
