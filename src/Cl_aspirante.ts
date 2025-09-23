export default class Cl_aspirante{
    private _nombre: string = "";
    private _condicion: number = 0; 
    private _cursoElegido: number = 0;
    private monto: number = 0;


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

    setMonto(monto: number): void {
        this.monto = monto;
    }

    montoPagar(): number{
        return this.monto;
    }
}