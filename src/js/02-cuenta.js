// * 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const pantalla = document.getElementById("pantalla");
const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (ingreso) {
    this.saldo += ingreso;
    pantalla.innerHTML += `<p class='text-success'>Ingreso: +${ingreso}</p>`;
  },
  extraer: function (retiro) {
    this.saldo -= retiro;
    pantalla.innerHTML += `<p class='text-danger'>Extraccion: -${retiro}</p>`;
  },
  informar: function () {
    pantalla.innerHTML += `<p class='text-secundary fs-4'>Saldo: ${this.saldo}</p>`;
  },
};

cuenta.ingresar(100);
cuenta.extraer(50);
cuenta.informar();
cuenta.ingresar(35066);
cuenta.extraer(2000);
cuenta.informar();
