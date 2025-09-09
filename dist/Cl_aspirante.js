import Cl_curso from "./Cl_curso.js";
export default class Cl_aspirante {
    _nombre;
    _condicion;
    _cursoElegido;
    monto;
    constructor(nombre, condicion, cursoElegido) {
        this._nombre = nombre;
        this._condicion = condicion;
        this._cursoElegido = cursoElegido;
        this.monto = 0;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set condicion(condicion) {
        this._condicion = condicion;
    }
    get condicion() {
        return this._condicion;
    }
    set cursoElegido(cursoElegido) {
        this._cursoElegido = cursoElegido;
    }
    get cursoElegido() {
        return this._cursoElegido;
    }
    procesarCurso(curso) {
        if (this.cursoElegido === curso.idCurso) {
            if (this.condicion === 1) {
                this.monto = curso.precio;
            }
            else if (this.condicion === 2) {
                this.monto = curso.precio / 2;
            }
        }
    }
    montoPagar() {
        return this.monto;
    }
}
