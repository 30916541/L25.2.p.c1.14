import Cl_curso from "./Cl_curso.js";

export default class Cl_aspirante{
    private _nombre: string;
    private _condicion: number;
    private _cursoElegido: number;
    private monto: number;


    constructor(
        nombre: string, 
        condicion: number, 
        cursoElegido: number){
        this._nombre = nombre;
        this._condicion = condicion;
        this._cursoElegido = cursoElegido;
        this.monto = 0;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }

    get nombre(): string{
        return this._nombre;
    }

    set condicion(condicion: number){
        this._condicion = condicion;
    }

    get condicion(): number{
        return this._condicion;
    }

    set cursoElegido(cursoElegido: number){
        this._cursoElegido = cursoElegido;
    }

    get cursoElegido(): number{
        return this._cursoElegido;
    }

    procesarCurso(curso: Cl_curso){
        if (this.cursoElegido === curso.idCurso) {
            if (this.condicion === 1) {
                this.monto = curso.precio;
            } else if (this.condicion === 2) {
                this.monto = curso.precio / 2;
            }
        }
    }

    montoPagar(): number{
        return this.monto;
    }
}