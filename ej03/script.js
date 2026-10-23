"use strict";

const datos = [
  ["number", 42],
  ["bigint", 12345678901234567890n],
  ["string", "Hola JavaScript"],
  ["boolean", true],
  ["null", null],
  ["undefined", undefined],
  ["symbol", Symbol("identificador")],
  ["object", { curso: "DWEC" }]
];

const lista = document.querySelector("#listaTipos");

datos.forEach(([nombre, valor]) => {
  const elemento = document.createElement("li");
  elemento.textContent = `${nombre}: valor = ${String(valor)}, typeof = ${typeof valor}`;
  lista.append(elemento);
});

// typeof null devuelve "object" por una peculiaridad histórica de JavaScript
// que se mantiene por compatibilidad con código antiguo. null representa ausencia de valor.
