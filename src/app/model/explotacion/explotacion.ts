import { Parcela } from "../parcela/parcela";

export class Explotacion {
    
    public id : number | null;
    public nombre : string;
    public registroNacional : string;
    public registroAutonomico : string;
    public direccion : string;
    public localidad : string;
    public codigoPostal : number;
    public provincia : string;
    public telefonoFijo : number;
    public telefonoMovil : number;
    public email : string;
    public rutaImagen : string;
    public parcelas : Parcela[];
    public explotacionesUsuarios : string[];

    constructor(
        id:number,
        nombre:string,
        registroNacional:string,
        registroAutonomico:string,
        direccion:string,
        localidad:string,
        codigoPostal:number,
        provincia:string,
        telefonoFijo:number,
        telefonoMovil:number,
        email:string,
        rutaImagen:string,
        parcelas:Parcela[],
        explotacionesUsuarios:string[]
    ){
        this.id = id;
        this.nombre = nombre;
        this.registroNacional = registroNacional;
        this.registroAutonomico = registroAutonomico;
        this.direccion = direccion;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
        this.provincia = provincia;
        this.telefonoFijo = telefonoFijo;
        this.telefonoMovil = telefonoMovil;
        this.email = email;
        this.rutaImagen = rutaImagen;
        this.parcelas = parcelas;
        this.explotacionesUsuarios = explotacionesUsuarios;

    }
}
