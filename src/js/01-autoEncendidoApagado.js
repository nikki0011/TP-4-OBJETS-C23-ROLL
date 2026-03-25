// * 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
  color: "Blanco",
  marca: "Ford",
  modelo: "ka",
  encender: function () {
    console.log("Auto encendido");
  },
  apagar: function () {
    console.log("Auto apagado");
  },
};

auto.encender();
auto.apagar();
