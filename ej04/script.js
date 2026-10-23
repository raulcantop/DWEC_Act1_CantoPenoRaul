"use strict";

const nombre = prompt("¿Cómo te llamas?");
const ciudad = prompt("¿En qué ciudad vives?");
const anioNacimientoTexto = prompt("¿En qué año naciste?");
const resultado = document.querySelector("#resultado");

if (nombre === null || ciudad === null || anioNacimientoTexto === null) {
  resultado.textContent = "Has cancelado uno de los datos. No se puede crear el mensaje.";
} else {
  const anioNacimiento = Number(anioNacimientoTexto);
  const anioActual = new Date().getFullYear();

  if (nombre.trim() === "" || ciudad.trim() === "" ||
      anioNacimientoTexto.trim() === "" ||
      !Number.isInteger(anioNacimiento) ||
      anioNacimiento < 1900 || anioNacimiento > anioActual) {
    resultado.textContent = "Introduce un nombre, una ciudad y un año de nacimiento válido.";
  } else {
    const edadAproximada = anioActual - anioNacimiento;
    resultado.textContent = `¡Bienvenido/a, ${nombre.trim()}! Vives en ${ciudad.trim()} y tienes aproximadamente ${edadAproximada} años.`;
  }
}
