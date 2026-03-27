// * 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

const pantalla = document.getElementById("pantalla");

const persona = {
  nombre: "alejo",
  edad: 45,
  dni: "",
  sexo: "hombre",
  peso: 77,
  altura: 1.82,
  yearNacimiento: 1981,
  mostrarGeneracion: function () {
    switch (true) {
      case (this.yearNacimiento > 1929 && this.yearNacimiento < 1949):
        pantalla.innerHTML += `<p class='text-light'>Generación: "Silent Generation"</p>`;
        pantalla.innerHTML += `<p class='text-light'>Rasgo característico: 'Austeridad'</p>`;
        break;
      case (this.yearNacimiento > 1948 && this.yearNacimiento < 1969):
        pantalla.innerHTML += `<p class='text-light'>Generación: 'Baby Boom'</p>`;
        pantalla.innerHTML += `<p class='text-light'>Rasgo característico: 'Ambición'</p>`;
        break;
      case (this.yearNacimiento > 1968 && this.yearNacimiento < 1981):
        pantalla.innerHTML += `<p class='text-light'>Generación: 'X'</p>`;
        pantalla.innerHTML += `<p class='text-light'>Rasgo característico: 'Obsesión por el exito'</p>`;
        break;
      case (this.yearNacimiento > 1980 && this.yearNacimiento < 1994):
        pantalla.innerHTML += `<p class='text-light'>Generación: 'Y'</p>`;
        pantalla.innerHTML += `<p class='text-light'>Rasgo característico: 'Frustración'</p>`;
        break;
      case (this.yearNacimiento > 1993 && this.yearNacimiento < 2011):
        pantalla.innerHTML += `<p class='text-light'>Generación: 'Z'</p>`;
        pantalla.innerHTML += `<p class='text-light'>Rasgo característico: 'Irreverencia'</p>`;
        break;

      default:
        pantalla.innerHTML += `<p>Generacion no encontrada</p>`;
        break;
    }
  },
  mayorDeEdad: function () {
    if (this.edad > 17) {
      pantalla.innerHTML += `<p>Mayor de edad: SI</p>`;
    }
  },
  mostrarDatos: function () {
    pantalla.innerHTML += `<p class='fs-5 text-light'>INFORMACION DE PERSONA</p>`;
    for (let key in persona) {
      if (typeof persona[key] !== "function") {
        pantalla.innerHTML += `<p class='text-secundary'>${key}: ${persona[key]}</p>`;
      }
    }
  },
  generarDni: function () {
    this.dni = Math.floor(Math.random() * 90000000) + 10000000;
  },
};

persona.mayorDeEdad();
persona.generarDni()
persona.mostrarDatos()
persona.mostrarGeneracion()


