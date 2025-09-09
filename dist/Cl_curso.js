export default class Cl_curso {
    _idCurso;
    _nombre;
    _precio;
    _cupos;
    constructor(idCurso, nombre, precio, cupos) {
        this._idCurso = idCurso;
        this._nombre = nombre;
        this._precio = precio;
        this._cupos = cupos;
    }
    set idCurso(idCurso) {
        this._idCurso = idCurso;
    }
    get idCurso() {
        return this._idCurso;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get precio() {
        return this._precio;
    }
    set cupos(cupos) {
        this._cupos = cupos;
    }
    get cupos() {
        return this._cupos;
    }
}
