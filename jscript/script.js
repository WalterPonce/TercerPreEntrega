let alumnos = [];
let notas = [];

cargarAlumnos();

class Alumno {
  constructor(nombre, notas) {
    this.nombre = nombre;
    this.notas = notas;
  }
}

function cargarAlumnos(){
  for(let i = 0; i < 3; i++){
    let apellidoNombre = prompt("Ingrese apellido y nombre del alumno:");
    if(apellidoNombre === null){
      console.log("Debe ingresar apellido y nombre del alumno.");
      i--;
    }else{
      const isNumber = Number(apellidoNombre);
      if(isNumber.isNaN){
        console.log("El nombre ingresado es: " + apellidoNombre);
        cargarNotas(apellidoNombre);        
      }else{
        console.log("Debe ingresar valores no numéricos");
      }            
    }
  }
}

function esNumero(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function cargarNotas(nombre) {
  for (let i = 0; i < 3; i++) {
    let valor = prompt("Ingrese el valor:");
    if (esNumero(valor)) {
      notas.push(parseFloat(valor));
    } else {
      console.log("Error: el valor ingresado no es numérico");
      i--;
    }
  }
  darDeAltaAlumno(nombre, notas);
}

function darDeAltaAlumno(nombre, notas) {
  const alumno = new Alumno(nombre, notas);
  alumnos.push(alumno);
}

function buscarAlumnoPorNombre(nombre) {
  const resultado = alumnos.find((alumno) => alumno.nombre === nombre);
  return resultado ? resultado : "Alumno no encontrado";
}