// * 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

const pantalla = document.getElementById("pantalla");

pantalla.innerHTML = `<p>Ingrese propiedaes en este orden en parametros con comillas (nombre,edad,profesion)</p>`;

const persona = {
  nombre: "",
  edad: 23,
  profesion: "",
  saludar: function (nombre, edad, profesion) {
    ((this.nombre = nombre),
      (this.edad = edad),
      (this.profesion = profesion),
      (pantalla.innerHTML += `<p>HOla ${this.nombre}</p>`));
  },
  despedirse: function () {
    pantalla.innerHTML += `<p>Hasta luego ${this.nombre}</p>`;
  },
};

const persona2 = {
  nombre: "",
  edad: 23,
  profesion: "",
  saludar: function (nombre, edad, profesion) {
    ((this.nombre = nombre),
      (this.edad = edad),
      (this.profesion = profesion),
      (pantalla.innerHTML += `<p>HOla ${this.nombre}</p>`));
  },
  despedirse: function () {
    pantalla.innerHTML += `<p>Hasta luego ${this.nombre}</p>`;
  },
};

persona.saludar("paula", 34, "profesora");
persona.despedirse();
