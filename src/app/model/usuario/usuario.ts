import { Explotacion } from "../explotacion/explotacion";

export class Usuario {
    id? : number;
    username? : string;
    password? : string;
    enabled? : boolean;
    nombre? : string;
    apellido1? : string;
    apellido2? : string;
    nif? : string;
    direccion? : string;
    localidad? : string;
    codigoPostal? : number;
    provincia? : string;
    telefonoFijo? : number;
    telefonoMovil? : number;
    email? : string;
    noInscripcionRopo? : string;
    asesor? : boolean;

    explotaciones? : Explotacion[]
    authorities? : string[]

    accountNonLocked? : boolean;
    accountnonExpired? : boolean;
    credentialsNonExpired? : boolean;
}
