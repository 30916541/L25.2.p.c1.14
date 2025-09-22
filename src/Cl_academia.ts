import Cl_aspirante from "./Cl_aspirante.js";

export default class Cl_academia{
    private cntCurso1: number;
    private cntCurso2: number;
    private acMonto: number;
    private curso1Id: number;
    private curso1Nombre: string;
    private curso1Precio: number;
    private curso1Cupos: number;
    private curso2Id: number;
    private curso2Nombre: string;
    private curso2Precio: number;
    private curso2Cupos: number;

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

    procesarAspirante(aspirante: Cl_aspirante) {
        if (aspirante.cursoElegido === this.curso1Id) {
            this.curso1Cupos--;
            if (aspirante.condicion === 1) {
                aspirante.setMonto(this.curso1Precio);
            } else if (aspirante.condicion === 2) {
                aspirante.setMonto(this.curso1Precio / 2);
            }
        } else if (aspirante.cursoElegido === this.curso2Id) {
            this.curso2Cupos--;
            if (aspirante.condicion === 1) {
                aspirante.setMonto(this.curso2Precio);
            } else if (aspirante.condicion === 2) {
                aspirante.setMonto(this.curso2Precio / 2);
            }
        }
        
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

    getCurso1Nombre(): string {
        return this.curso1Nombre;
    }

    getCurso2Nombre(): string {
        return this.curso2Nombre;
    }
}