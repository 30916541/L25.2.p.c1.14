import Cl_aspirante from "./Cl_aspirante.js";
export default class Cl_academia {
    cntCurso1;
    cntCurso2;
    acMonto;
    // Variables individuales para el curso 1
    curso1Id;
    curso1Nombre;
    curso1Precio;
    curso1Cupos;
    // Variables individuales para el curso 2
    curso2Id;
    curso2Nombre;
    curso2Precio;
    curso2Cupos;
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
    procesarAspirante(aspirante) {
        // Calcular el monto a pagar según el curso y condición
        if (aspirante.cursoElegido === this.curso1Id) {
            if (aspirante.condicion === 1) {
                aspirante.setMonto(this.curso1Precio);
            }
            else if (aspirante.condicion === 2) {
                aspirante.setMonto(this.curso1Precio / 2);
            }
        }
        else if (aspirante.cursoElegido === this.curso2Id) {
            if (aspirante.condicion === 1) {
                aspirante.setMonto(this.curso2Precio);
            }
            else if (aspirante.condicion === 2) {
                aspirante.setMonto(this.curso2Precio / 2);
            }
        }
        // Contar estudiantes por curso
        if (aspirante.cursoElegido === 1) {
            this.cntCurso1++;
        }
        else if (aspirante.cursoElegido === 2) {
            this.cntCurso2++;
        }
        // Acumular el monto total
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
    // Métodos para obtener información de los cursos
    getCurso1Id() {
        return this.curso1Id;
    }
    getCurso1Nombre() {
        return this.curso1Nombre;
    }
    getCurso1Precio() {
        return this.curso1Precio;
    }
    getCurso1Cupos() {
        return this.curso1Cupos;
    }
    getCurso2Id() {
        return this.curso2Id;
    }
    getCurso2Nombre() {
        return this.curso2Nombre;
    }
    getCurso2Precio() {
        return this.curso2Precio;
    }
    getCurso2Cupos() {
        return this.curso2Cupos;
    }
}
