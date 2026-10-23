"use strict";

let userName = "Raúl";
let age = 24;
let city = "Córdoba";

const COLOR_FAVORITO = "#2bff00";
const loadTime = Date.now();

// Mostramos todas las variables y constantes.
alert(`Nombre: ${userName}`);
alert(`Edad: ${age}`);
alert(`Ciudad: ${city}`);
alert(`Color favorito: ${COLOR_FAVORITO}`);
alert(`Momento de carga (milisegundos): ${loadTime}`);

// Si se descomenta la siguiente línea, el navegador lanza TypeError:
// Assignment to constant variable. Una constante no puede reasignarse.
// COLOR_FAVORITO = "#FF0000";
