"use strict";

const playlist = [
  ["Bohemian Rhapsody", "Queen", 354, "Rock"],
  ["Hotel California", "Eagles", 391, "Rock"],
  ["Imagine", "John Lennon", 183, "Pop"]
];

const salida = document.querySelector("#salida");

function mostrarTitulo(texto) {
  const titulo = document.createElement("h2");
  titulo.textContent = texto;
  salida.append(titulo);
}

function mostrarPlaylist(titulo, canciones) {
  mostrarTitulo(titulo);
  const lista = document.createElement("ol");
  canciones.forEach((cancion) => {
    const item = document.createElement("li");
    item.textContent = cancion.map((dato) => String(dato)).join(" | ");
    lista.append(item);
  });
  salida.append(lista);
}

// PARTE 1: push y pop.
// Añadimos dos canciones al final.
playlist.push(["Numb", "Linkin Park", 185, "Rock"]);
playlist.push(["Bad Guy", "Billie Eilish", 194, "Pop"]);

// pop elimina y devuelve la última fila.
const cancionEliminadaPop = playlist.pop();

// Añadimos el año como quinto dato de la primera canción.
playlist[0].push(1975);

mostrarTitulo("Parte 1 – push y pop");
const textoPop = document.createElement("p");
textoPop.textContent = `Canción eliminada: ${cancionEliminadaPop[0]}`;
salida.append(textoPop);
mostrarPlaylist("Playlist resultante", playlist);

// PARTE 2: splice.
// Inserta una canción en posición 1 sin eliminar ninguna (deleteCount = 0).
playlist.splice(1, 0, ["Dreams", "Fleetwood Mac", 257, "Rock"]);

// Elimina la fila de posición 2 y guarda el array devuelto por splice.
const cancionesEliminadasSplice = playlist.splice(2, 1);

// Sustituye la fila 0 por otra canción.
playlist.splice(0, 1, ["Billie Jean", "Michael Jackson", 294, "Pop", 1982]);

mostrarTitulo("Parte 2 – splice");
const textoSplice = document.createElement("p");
textoSplice.textContent = `Canción eliminada: ${cancionesEliminadasSplice[0].join(" | ")}`;
salida.append(textoSplice);
mostrarPlaylist("Playlist después de splice", playlist);

// PARTE 3: spread y copias.
// Esta copia solo duplica el array exterior; las filas internas siguen compartidas.
const copiaSuperficial = [...playlist];
const tituloOriginal = playlist[0][0];
copiaSuperficial[0][0] = "Título cambiado en copia superficial";
const avisoSuperficial = document.createElement("p");
avisoSuperficial.textContent =
  `Copia superficial: original = "${playlist[0][0]}". ` +
  "También cambia el original porque ambos arrays comparten la fila interna.";
salida.append(avisoSuperficial);

// Restauramos el título para que la playlist de ejemplo quede clara.
playlist[0][0] = tituloOriginal;

// map y spread crean un array exterior y arrays internos nuevos.
const copiaIndependiente = playlist.map((cancion) => [...cancion]);
copiaIndependiente[0][0] = "Título cambiado solo en copia independiente";

const avisoIndependiente = document.createElement("p");
avisoIndependiente.textContent =
  `Copia independiente: original = "${playlist[0][0]}"; ` +
  `copia = "${copiaIndependiente[0][0]}". El original no cambia.`;
salida.append(avisoIndependiente);
mostrarPlaylist("Playlist original final", playlist);
mostrarPlaylist("Copia independiente", copiaIndependiente);
