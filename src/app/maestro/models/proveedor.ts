export class Proveedor {
    id?: number;
    codigo: string;
    ruc: number;
    razonSocial: string;
    fechaInicio: Date;
    rubroActividad: string;
    direccion: string;
    telefono: number;
    correo: string;

    constructor(codigo: string,
                ruc: number,
                razonSocial: string,
                fechaInicio: Date,
                rubroActividad: string,
                direccion: string,
                telefono: number,
                correo: string){
        
        this.codigo =  codigo;
        this.ruc = ruc ;
        this.razonSocial = razonSocial;
        this.fechaInicio = fechaInicio;
        this.rubroActividad = rubroActividad;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correo = correo;
    }


}