"use strict";

const comparaciones = [
  // Los números se comparan numéricamente: 2 es mayor que 1.
  ["2 > 1", 2 > 1, "2 es mayor que 1."],
  // En una comparación relacional, el string numérico se convierte a número.
  ['"2" > 1', "2" > 1, '"2" se convierte al número 2.'],
  // == convierte tipos: "01" se convierte al número 1.
  ['"01" == 1', "01" == 1, '"01" se convierte al número 1.'],
  // 0 == false es true por conversión de false a 0.
  ["0 == false", 0 == false, "La igualdad no estricta convierte false a 0."],
  // La cadena vacía se convierte a 0 y false también equivale a 0.
  ['"" == false', "" == false, 'La cadena vacía y false se convierten a 0.'],
  // === compara también el tipo: number y boolean son distintos.
  ["0 === false", 0 === false, "La igualdad estricta no convierte tipos."],
  // null y undefined son iguales entre sí solo con igualdad no estricta.
  ["null == undefined", null == undefined, "Caso especial definido por ==."],
  // Con igualdad estricta, null y undefined son tipos diferentes.
  ["null === undefined", null === undefined, "Son tipos diferentes."],
  // null se convierte a 0 en esta comparación relacional; 0 > 0 es false.
  ["null > 0", null > 0, "null se convierte a 0; 0 no es mayor que 0."],
  // null se convierte a 0; 0 >= 0 es true.
  ["null >= 0", null >= 0, "null se convierte a 0; 0 es mayor o igual que 0."],
  // undefined se convierte en NaN al comparar con 0; la comparación da false.
  ["undefined == 0", undefined == 0, "undefined no es igual a 0."],
  // Las cadenas se comparan carácter por carácter según sus valores Unicode.
  ['"Glow" > "Glee"', "Glow" > "Glee", 'En la tercera letra, "o" va después de "e".']
];

const lista = document.querySelector("#comparaciones");
comparaciones.forEach(([expresion, resultado, explicacion]) => {
  const item = document.createElement("li");
  item.textContent = `${expresion} → ${resultado}. ${explicacion}`;
  lista.append(item);
});
