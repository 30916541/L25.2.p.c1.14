import Cl_aspirante from "./Cl_aspirante.js";
export default class Cl_academia {
    cntCurso1;
    cntCurso2;
    acMonto;
    constructor() {
        this.cntCurso1 = 0;
        this.cntCurso2 = 0;
        this.acMonto = 0;
    }
    procesarAspirante(aspirante) {
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
}
