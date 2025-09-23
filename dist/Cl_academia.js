import Cl_aspirante from "./Cl_aspirante.js";
export default class Cl_academia {
    cntCurso1 = 0;
    cntCurso2 = 0;
    acMonto = 0;
    curso1Id = 0;
    curso1Nombre = "";
    curso1Precio = 0;
    curso1Cupos = 0;
    curso2Id = 0;
    curso2Nombre = "";
    curso2Precio = 0;
    curso2Cupos = 0;
    constructor() {
        this.cntCurso1 = 0;
        this.cntCurso2 = 0;
        this.acMonto = 0;
        this.curso1Id = 1;
        this.curso1Nombre = "Matemáticas";
        this.curso1Precio = 10;
        this.curso1Cupos = 5;
        this.curso2Id = 2;
        this.curso2Nombre = "Química";
        this.curso2Precio = 15;
        this.curso2Cupos = 4;
    }
    procesarAspirante(aspirante) {
        if (aspirante.cursoElegido === this.curso1Id) {
            this.curso1Cupos--;
            if (aspirante.condicion === 1) {
                aspirante.setMonto(this.curso1Precio);
            }
            else if (aspirante.condicion === 2) {
                aspirante.setMonto(this.curso1Precio / 2);
            }
        }
        else if (aspirante.cursoElegido === this.curso2Id) {
            this.curso2Cupos--;
            if (aspirante.condicion === 1) {
                aspirante.setMonto(this.curso2Precio);
            }
            else if (aspirante.condicion === 2) {
                aspirante.setMonto(this.curso2Precio / 2);
            }
        }
        if (aspirante.cursoElegido === 1) {
            this.cntCurso1++;
        }
        else if (aspirante.cursoElegido === 2) {
            this.cntCurso2++;
        }
        this.acMonto += aspirante.montoPagar();
    }
    cantidadCurso1() {
        return this.cntCurso1;
    }
    cantidadCurso2() {
        return this.cntCurso2;
    }
    montoTotal() {
        return this.acMonto;
    }
    getCurso1Nombre() {
        return this.curso1Nombre;
    }
    getCurso2Nombre() {
        return this.curso2Nombre;
    }
}
