import Cl_aspirante from "./Cl_aspirante.js";

export default class Cl_academia{
    private cntCurso1: number;
    private cntCurso2: number;
    private acMonto: number;

    constructor() {
        this.cntCurso1 = 0;
        this.cntCurso2 = 0;
        this.acMonto = 0;
    }

    procesarAspirante(aspirante: Cl_aspirante) {
        if (aspirante.cursoElegido === 1) {
            this.cntCurso1++;
        } else if (aspirante.cursoElegido === 2) {
            this.cntCurso2++;
        }

        this.acMonto += aspirante.montoPagar();
    }

    cantidadCurso1(): number {
        return this.cntCurso1;
    }

    cantidadCurso2(): number {
        return this.cntCurso2;
    }

    montoTotal(): number {
        return this.acMonto;
    }
}