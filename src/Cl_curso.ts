export default class Cl_curso {
    private _idCurso: number;
    private _nombre: string;
    private _precio: number;
    private _cupos: number;

    constructor(
        idCurso: number, 
        nombre: string, 
        precio: number, 
        cupos: number) {
        this._idCurso = idCurso;
        this._nombre = nombre;
        this._precio = precio;
        this._cupos = cupos;
    }

    set idCurso(idCurso: number) {
        this._idCurso = idCurso;
    }

    get idCurso(): number {
        return this._idCurso;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set precio(precio: number) {
        this._precio = precio;
    }

    get precio(): number {
        return this._precio;
    }

    set cupos(cupos: number) {
        this._cupos = cupos;
    }

    get cupos(): number {
        return this._cupos;
    }
}