import Cl_aspirante from "./Cl_aspirante.js";

export default class Cl_academia{
    private cntCurso1: number;
    private cntCurso2: number;
    private acMonto: number;
    
    // Variables individuales para el curso 1
    private curso1Id: number;
    private curso1Nombre: string;
    private curso1Precio: number;
    private curso1Cupos: number;
    
    // Variables individuales para el curso 2
    private curso2Id: number;
    private curso2Nombre: string;
    private curso2Precio: number;
    private curso2Cupos: number;

    constructor() {
        this.cntCurso1 = 0;
        this.cntCurso2 = 0;
        this.acMonto = 0;
        
        // Inicializar las variables del curso 1
        this.curso1Id = 1;
        this.curso1Nombre = "Matemáticas";
        this.curso1Precio = 10;
        this.curso1Cupos = 5;
        
        // Inicializar las variables del curso 2
        this.curso2Id = 2;
        this.curso2Nombre = "Química";
        this.curso2Precio = 15;
        this.curso2Cupos = 4;
    }

    procesarAspirante(aspirante: Cl_aspirante) {
        // Calcular el monto a pagar según el curso y condición
        if (aspirante.cursoElegido === this.curso1Id) {
            if (aspirante.condicion === 1) {
                aspirante.setMonto(this.curso1Precio);
            } else if (aspirante.condicion === 2) {
                aspirante.setMonto(this.curso1Precio / 2);
            }
        } else if (aspirante.cursoElegido === this.curso2Id) {
            if (aspirante.condicion === 1) {
                aspirante.setMonto(this.curso2Precio);
            } else if (aspirante.condicion === 2) {
                aspirante.setMonto(this.curso2Precio / 2);
            }
        }
        
        // Contar estudiantes por curso
        if (aspirante.cursoElegido === 1) {
            this.cntCurso1++;
        } else if (aspirante.cursoElegido === 2) {
            this.cntCurso2++;
        }

        // Acumular el monto total
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

    // Métodos para obtener información de los cursos
    getCurso1Id(): number {
        return this.curso1Id;
    }

    getCurso1Nombre(): string {
        return this.curso1Nombre;
    }

    getCurso1Precio(): number {
        return this.curso1Precio;
    }

    getCurso1Cupos(): number {
        return this.curso1Cupos;
    }

    getCurso2Id(): number {
        return this.curso2Id;
    }

    getCurso2Nombre(): string {
        return this.curso2Nombre;
    }

    getCurso2Precio(): number {
        return this.curso2Precio;
    }

    getCurso2Cupos(): number {
        return this.curso2Cupos;
    }
}