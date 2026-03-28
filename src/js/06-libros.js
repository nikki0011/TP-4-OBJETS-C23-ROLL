// * 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

const pantalla = document.getElementById("pantalla");

const libro = {
  titulo: "",
  isbn: "",
  autor: "",
  numeroPaginas: "",
  mostrarLibro: function (titulo, isbn, autor, numeroPaginas) {
    ((this.titulo = titulo),
      (this.isbn = isbn),
      (this.autor = autor),
      (this.numeroPaginas = numeroPaginas),
      (pantalla.innerHTML = `<p class='text-secundary'>El libro <span class='text-light'>${this.titulo}</span> con ISBN <span class='text-light'>${this.isbn}</span> creado por <span class='text-light'>${this.autor}</span> tiene <span class='text-light'>${this.numeroPaginas} páginas</span></p>`));
  },
};

const libro2 = {
  titulo: "",
  isbn: "",
  autor: "",
  numeroPaginas: "",
  mostrarLibro: function (titulo, isbn, autor, numeroPaginas) {
    ((this.titulo = titulo),
      (this.isbn = isbn),
      (this.autor = autor),
      (this.numeroPaginas = numeroPaginas),
      (pantalla.innerHTML += `<p class='text-secundary'>El libro <span class='text-light'>${this.titulo}</span> con ISBN <span class='text-light'>${this.isbn}</span> creado por <span class='text-light'>${this.autor}</span> tiene <span class='text-light'>${this.numeroPaginas} páginas</span></p>`));
  },
};

libro.mostrarLibro("Arlequin", 23456, "anda a saber", 120);
libro2.mostrarLibro("sensorialmente", 564657, "anda a saber", 130);

if (libro.numeroPaginas > libro2.numeroPaginas) {
  pantalla.innerHTML += `El libro <span class='text-warning'>${libro.titulo}</span> tiene mas páginas`;
} else if (libro.numeroPaginas < libro2.numeroPaginas) {
  pantalla.innerHTML += `El libro <span class='text-warning'>${libro2.titulo}</span> tiene mas páginas`;
} else {
  pantalla.innerHTML += `Ambos libros tiene la misma cantidad de páginas`;
}
