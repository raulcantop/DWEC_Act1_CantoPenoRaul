"use strict";

const notaTexto = prompt("Introduce una nota entre 0 y 10:");
const resultado = document.querySelector("#resultado");

if (notaTexto === null || notaTexto.trim() === "") {
  resultado.textContent = "No has introducido una nota.";
} else {
  const nota = Number(notaTexto);

  if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
    resultado.textContent = "Error: la nota debe ser un número entre 0 y 10.";
  } else {
    let calificacion;

    if (nota < 5) {
      calificacion = "Suspenso";
    } else if (nota < 7) {
      calificacion = "Aprobado";
    } else if (nota < 9) {
      calificacion = "Notable";
    } else {
      calificacion = "Sobresaliente";
    }

    // Versión original: if (nota >= 5) { estado = "aprobado"; } else { estado = "suspenso"; }
    // Operador ternario: evalúa una condición y elige una de dos expresiones.
    const estado = nota >= 5 ? "aprobado" : "suspenso";
    resultado.textContent = `Calificación: ${calificacion}. Estado: ${estado}.`;
  }
}