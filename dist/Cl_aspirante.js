export default class Cl_aspirante {
    _nombre = "";
    _condicion = 0;
    _cursoElegido = 0;
    monto = 0;
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
    setMonto(monto) {
        this.monto = monto;
    }
    montoPagar() {
        return this.monto;
    }
}
