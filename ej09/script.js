"use strict";

const nombre = prompt("Introduce tu nombre (puedes dejarlo vacío):");
const apodo = prompt("Introduce tu apodo (puedes dejarlo vacío):");
const edadTexto = prompt("Introduce tu edad:");
const edad = edadTexto === null || edadTexto.trim() === "" ? NaN : Number(edadTexto);

// || devuelve el primer valor truthy; si ambos están vacíos o se cancelan, usamos Anónimo.
const nombreVisible = (nombre || "").trim() || (apodo || "").trim() || "Anónimo";
alert(`Nombre mostrado: ${nombreVisible}`);

// && solo permite mostrar el mensaje si la edad es válida y hay nombre o apodo.
const tieneIdentidad = Boolean((nombre || "").trim() || (apodo || "").trim());
const acceso = Number.isFinite(edad) && edad >= 18 && tieneIdentidad;
alert(acceso && "Acceso permitido" || "Acceso denegado");

// Con ||, el 0 se considera falsy y se elige el valor alternativo.
// Con ??, solo se reemplazan null y undefined, por lo que se conserva el 0.
const altura = 0;
alert(`altura || 170 = ${altura || 170}; altura ?? 170 = ${altura ?? 170}`);

// !! convierte cualquier valor a booleano.
const tieneApodo = !!((apodo || "").trim());
alert(`¿Se ha indicado apodo?: ${tieneApodo}`);
