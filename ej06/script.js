"use strict";

const textoA = prompt("Introduce el primer número:");
const textoB = prompt("Introduce el segundo número:");

if (textoA !== null && textoB !== null &&
    textoA.trim() !== "" && textoB.trim() !== "") {
  const a = Number(textoA);
  const b = Number(textoB);

  if (Number.isFinite(a) && Number.isFinite(b)) {
    alert(`Suma: ${a + b}`);
    alert(`Resta: ${a - b}`);
    alert(`Multiplicación: ${a * b}`);
    alert(`División: ${b === 0 ? "No se puede dividir entre cero" : a / b}`);
    alert(`Resto: ${b === 0 ? "No se puede calcular con divisor cero" : a % b}`);
    alert(`Potencia: ${a ** b}`);
  } else {
    alert("Debes introducir dos números válidos.");
  }
} else {
  alert("Operación cancelada o datos vacíos.");
}

let counter = 5;

// El sufijo devuelve primero el valor antiguo y luego incrementa la variable.
alert(`counter++ devuelve ${counter++}; después counter vale ${counter}`);
// El prefijo incrementa primero y devuelve el nuevo valor.
alert(`++counter devuelve ${++counter}; ahora counter vale ${counter}`);

// También se puede decrementar con sufijo y prefijo.
alert(`counter-- devuelve ${counter--}; después counter vale ${counter}`);
alert(`--counter devuelve ${--counter}; ahora counter vale ${counter}`);

// Asignaciones compuestas: equivalen a counter = counter + 3 y counter = counter * 2.
counter += 3;
counter *= 2;
alert(`Valor final tras += 3 y *= 2: ${counter}`);
