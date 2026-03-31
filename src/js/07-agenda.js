const pantalla = document.getElementById("pantalla");
let agenda = [];
let salida = true;

function agregarContacto() {
  const name = prompt("Ingrese nombre de contacto");
  const tele = parseInt(prompt("Ingrese numero de contacto"));

  const contacto = {
    nombre: name,
    telefono: tele,
  };
  agenda.push(contacto);
}

function checkNumero(name) {
  for (let i = 0; i < agenda.length; i++) {
    if (agenda[i].nombre === name) {
      alert("Ese nombre ya existe en la agenda");
    } else {
      alert("Ese nombre no existe en la agenda");
    }
  }
}

function listaDeContactos() {
  let lista = "";
  for (let i = 0; i < agenda.length; i++) {
    for (const key in agenda[i]) {
      lista += `${key} = ${agenda[i][key]}` + "\n";
    }
    lista += "---------------------------" + "\n";
  }
  alert(lista);
}

function buscarContacto(name) {
  for (let i = 0; i < agenda.length; i++) {
    if (agenda[i].nombre === name) {
      alert(`${name}: ${agenda[i].telefono}`);
    } else {
      alert("Ese nombre no se encontro en la agenda");
    }
  }
}

function eliminarContacto(name) {
  const nuevaAgenda = agenda.filter((persona) => persona.nombre !== name);
  agenda = nuevaAgenda;
}

while (salida === true) {
  const menu = prompt(
    ` 1.AñadirContacto \n 2.ComprobarContactoExistente \n 3.VerListaDeContactos \n 4.BuscarContacto \n 5.EliminarContacto \n 6.EspacioEnAgenda \n 7.SalirDeMenu`,
  );
  switch (menu) {
    case "1":
      if (agenda.length < 11) {
        agregarContacto();
      } else {
        alert(
          "Agenda llena, elimine 1 o mas contactos y vuelva a agregar contacto nuevo",
        );
      }
      break;
    case "2":
      const checknum = prompt("Ingrese nombre de contacto");
      checkNumero(checknum);
      break;
    case "3":
      listaDeContactos();
      break;
    case "4":
      const buscarNum = prompt("Ingrese nombre de contacto");
      buscarContacto(buscarNum);
      break;
    case "5":
      const numEliminar = prompt("Ingrese nombre de contacto");
      eliminarContacto(numEliminar);
      break;
    case "6":
      const espacioAgenda = agenda.length + "/10";
      alert("Espacio en agenda: " + espacioAgenda);
      break;
    case "7":
      pantalla.innerHTML = `<h5 class='text-light'>Lista de contactos</h5>`;

      for (let i = 0; i < agenda.length; i++) {
        for (const key in agenda[i]) {
          pantalla.innerHTML += `${key} = ${agenda[i][key]}` + "<br/>";
        }
        pantalla.innerHTML += "---------------------------" + "<br/>";
      }
      salida = false;
      break;
    default:
      alert("Dato no valido, ingrese una opcion del menu");
      break;
  }
}
