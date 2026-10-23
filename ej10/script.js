"use strict";

let continuar = true;

while (continuar) {
  const opcion = prompt(
    "MENÚ\n1 - Tabla de multiplicar\n2 - Sumar números\n" +
    "3 - Números impares del 1 al 20\n4 - Cuenta atrás\n0 - Salir"
  );

  if (opcion === null || opcion === "0") {
    continuar = false;
    alert("Programa finalizado.");
    continue;
  }

  switch (opcion) {
    case "1": {
      const textoNumero = prompt("¿De qué número quieres la tabla?");
      const numero = Number(textoNumero);
      if (textoNumero === null || textoNumero.trim() === "" || !Number.isFinite(numero)) {
        alert("Introduce un número válido.");
        break;
      }
      let tabla = "";
      // for repite diez veces para construir la tabla de multiplicar.
      for (let i = 1; i <= 10; i++) {
        tabla += `${numero} × ${i} = ${numero * i}\n`;
      }
      alert(tabla);
      break;
    }

    case "2": {
      let suma = 0;
      // while(true) repite hasta que break termina el bucle.
      while (true) {
        const texto = prompt("Introduce un número para sumar (vacío o Cancelar para terminar):");
        if (texto === null || texto.trim() === "") {
          break;
        }
        const numero = Number(texto);
        if (!Number.isFinite(numero)) {
          alert("Ese valor no es un número; no se sumará.");
          continue;
        }
        suma += numero;
      }
      alert(`La suma total es ${suma}`);
      break;
    }

    case "3": {
      let impares = "";
      // for recorre del 1 al 20; continue salta los números pares.
      for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
          continue;
        }
        impares += `${i} `;
      }
      alert(`Números impares: ${impares}`);
      break;
    }

    case "4": {
      const textoInicio = prompt("¿Desde qué número quieres contar atrás?");
      const inicio = Number(textoInicio);
      if (textoInicio === null || textoInicio.trim() === "" ||
          !Number.isInteger(inicio) || inicio < 0) {
        alert("Introduce un entero igual o mayor que 0.");
        break;
      }
      let cuenta = "";
      let actual = inicio;
      // do...while ejecuta el bloque al menos una vez y continúa hasta llegar a 0.
      do {
        cuenta += `${actual} `;
        actual--;
      } while (actual >= 0);
      alert(cuenta);
      break;
    }

    default:
      alert("Opción desconocida. Elige 1, 2, 3, 4 o 0.");
  }
}
