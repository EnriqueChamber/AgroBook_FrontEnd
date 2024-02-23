export class Parcela {
    public id : number | null;
    public nombre : string;
    public agregado:number;
    public zona:number;
    public poligono:number;
    public parcela:number;
    public recinto:number;
    public superficie:number;
    public pendiente:number;
    public referenciaCatastral:string;
    public uso:string;
    public subvencionalidad:number;
    public coeficienteRegadio:number;
    public secanoRegadio:string;
    public ventilacion:string;
    

    constructor(
        id:number,
        nombre:string,
        agregado:number,
        zona:number,
        poligono:number,
        parcela:number,
        recinto:number,
        superficie:number,
        pendiente:number,
        referenciaCatastral:string,
        uso:string,
        subvencionalidad:number,
        coeficienteRegadio:number,
        secanoRegadio:string,
        ventilacion:string
    ){
        this.id = id;
        this.nombre = nombre;
        this.agregado = agregado;
        this.zona = zona;
        this.poligono = poligono;
        this.parcela = parcela;
        this.recinto = recinto;
        this.superficie = superficie;
        this.pendiente = pendiente;
        this.referenciaCatastral = referenciaCatastral;
        this.uso = uso;
        this.subvencionalidad = subvencionalidad;
        this.coeficienteRegadio = coeficienteRegadio;
        this.secanoRegadio = secanoRegadio;
        this.ventilacion = ventilacion;
    }
}
