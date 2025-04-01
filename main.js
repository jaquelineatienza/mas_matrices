import promptSync from "prompt-sync";
const prompt = promptSync();

let alumnos = [
  [
    "Juan",
    [
      ["Matematicas", 8],
      ["Lengua", 9],
      ["Sociales", 7],
      ["Naturales", 7],
    ],
  ],
  [
    "pablo",
    [
      ["Matematicas", 8],
      ["Lengua", 9],
      ["Sociales", 7],
      ["Naturales", 7],
    ],
  ],
];
function buscarMateria(nombreMateria) {
  let existeMateria = false;
  for (let i = 0; i < alumnos.length; i++) {
    for (let e = 0; e < alumnos[i][1].length; e++) {
      let materia = alumnos[i][1][e][0];

      if (nombreMateria === materia) {
        let nota = prompt("La materia ya existe,ingrese la nota del alumno");
        alumnos[i][1][e][1] = nota;
        existeMateria = true;
        break;
      }
    }
    const nombreDeMateria = nombreMateria;

    if (!existeMateria) {
      añadirMateria(nombreDeMateria);
      break;
    }
  }
}
function añadirMateria(nombreDeMateria) {
  let nota = prompt("Ingrese la nota del alumno");
  for (let i = 0; i < alumnos.length; i++) {
    alumnos[i][1].push([nombreDeMateria, nota]);
  }
  console.log("Materia agregada:", alumnos[i][1]);
}

function alum_filtrado() {
  let name = prompt("Ingrese el nombre del alumno:").trim();
  let encontrado = false;
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i][0] === name) {
      console.log("El alumno ya se encuentra registrado");
      let nombreMateria = prompt("Ingrese el nombre del materia:").trim();

      buscarMateria(nombreMateria);
      encontrado = true;
      break;
    }
  }
  if (!encontrado) {
    añadir_alumno();
  }
}
function añadir_alumno() {
  let nombreMateria = prompt("Ingrese el nombre del materia:").trim();
  let nota = prompt("ingrese la nota del alumno");
  let materias = [];
  let contenido_materias = [];

  contenido_materias.push([nombreMateria, nota]);
  materias.push(contenido_materias);
  alumnos.push([name, materias]);
  console.log(alumnos);
}
alum_filtrado();
