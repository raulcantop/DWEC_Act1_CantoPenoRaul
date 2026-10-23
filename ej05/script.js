"use strict";

const primerTexto = prompt("Introduce el primer número:");
const segundoTexto = prompt("Introduce el segundo número:");

if (primerTexto !== null && segundoTexto !== null &&
    primerTexto.trim() !== "" && segundoTexto.trim() !== "") {
  const primerNumero = Number(primerTexto);
  const segundoNumero = Number(segundoTexto);

  if (Number.isFinite(primerNumero) && Number.isFinite(segundoNumero)) {
    alert(`Suma numérica: ${primerNumero + segundoNumero}`);
    // Sin conversión, + concatena strings: por ejemplo, "2" + "3" da "23".
    alert(`Sin convertir (concatenación): ${primerTexto + segundoTexto}`);
  } else {
    alert("Alguno de los valores no es un número válido.");
  }
} else {
  alert("No has introducido los dos números.");
}

const valores = ["123", " 45 ", "abc", "", "0", 0, null, undefined, true];
const contenedor = document.querySelector("#tablaConversiones");
const tabla = document.createElement("table");
const encabezado = document.createElement("tr");

["Valor original", "Number()", "String()", "Boolean()"].forEach((texto) => {
  const th = document.createElement("th");
  th.textContent = texto;
  encabezado.append(th);
});
tabla.append(encabezado);

valores.forEach((valor) => {
  const fila = document.createElement("tr");
  const representacion = valor === undefined ? "undefined" :
    valor === null ? "null" : JSON.stringify(valor);

  [representacion, String(Number(valor)), String(valor), String(Boolean(valor))]
    .forEach((texto) => {
      const celda = document.createElement("td");
      celda.textContent = texto;
      fila.append(celda);
    });
  tabla.append(fila);
});
contenedor.append(tabla);
