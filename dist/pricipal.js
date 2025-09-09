import Cl_academia from "./Cl_academia.js";
import Cl_aspirante from "./Cl_aspirante.js";
import Cl_curso from "./Cl_curso.js";
const curso1 = new Cl_curso(1, "Matemáticas", 10, 5);
const curso2 = new Cl_curso(2, "Química", 15, 4);
const academia = new Cl_academia();
const aspirante1 = new Cl_aspirante("Juan", 1, 2);
const aspirante2 = new Cl_aspirante("Carlos", 2, 1);
const aspirante3 = new Cl_aspirante("Ana", 1, 1);
const aspirante4 = new Cl_aspirante("Raúl", 2, 1);
aspirante1.procesarCurso(curso2);
academia.procesarAspirante(aspirante1);
aspirante2.procesarCurso(curso1);
academia.procesarAspirante(aspirante2);
aspirante3.procesarCurso(curso1);
academia.procesarAspirante(aspirante3);
aspirante4.procesarCurso(curso1);
academia.procesarAspirante(aspirante4);
console.log(`${aspirante1.nombre} debe pagar $${aspirante1.montoPagar()}`);
console.log(`${aspirante2.nombre} debe pagar $${aspirante2.montoPagar()}`);
console.log(`${aspirante3.nombre} debe pagar $${aspirante3.montoPagar()}`);
console.log(`${aspirante4.nombre} debe pagar $${aspirante4.montoPagar()}`);
console.log(`Se inscribieron ${academia.cantidadCurso1()} estudiantes en matemáticas`);
console.log(`Se inscribieron ${academia.cantidadCurso2()} estudiantes en química`);
console.log(`La academia recibe un total de $${academia.montoTotal()}`);
let salida = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = `
    ${aspirante1.nombre} debe pagar $${aspirante1.montoPagar()}<br>
    ${aspirante2.nombre} debe pagar $${aspirante2.montoPagar()}<br>
    ${aspirante3.nombre} debe pagar $${aspirante3.montoPagar()}<br>
    ${aspirante4.nombre} debe pagar $${aspirante4.montoPagar()}<br><br>
    Se inscribieron ${academia.cantidadCurso1()} estudiantes en matemáticas<br>
    Se inscribieron ${academia.cantidadCurso2()} estudiantes en química<br>
    La academia recibe un total de $${academia.montoTotal()}<br>
    `;
}
