// *4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

const pantalla = document.getElementById("pantalla");

const objetoUno = {
  codigo: "2343",
  nombre: "uranio",
  precio: 122220000000,
  imprimirDatos: function () {
    pantalla.innerHTML = `<p class='text-light fs-4'>Propiedades del ObjetoUno</p>`;
    for (let key in objetoUno) {
      if (typeof objetoUno[key] !== "function") {
        pantalla.innerHTML += `<p class='text-secundary'>${key}: ${objetoUno[key]}</p>`;
      }
    }
  },
};

objetoUno.imprimirDatos();
