/* export interface ProveedorListResponse {
    content: Proveedor[];
    totalElements: number;
}

export class Proveedor {
    id: number | undefined;
    codigo: string | undefined;
    ruc: number | undefined;
    fechaInicio: Date | undefined;
    nombre: string | undefined;
    rubro: string | undefined;
    comentarios: string | undefined;
}

export interface ProveedoresList {
    id: number;
    codigo: string;
    ruc: number;
    nombre: string;
    fechaInicio: Date;
    rubro: string;
    comentarios: string;
} */

 export class Proveedor {
    id?: number;
    codigo: string;
    ruc: number;
    fechaInicio: Date;
    nombre: string;
    rubro: string;
    comentario: string;

    constructor(codigo: string,
                ruc: number,
                nombre: string,
                fechaInicio: Date,
                rubro: string,
                comentario: string
                ){
        
        this.codigo =  codigo;
        this.ruc = ruc ;
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
        this.rubro = rubro;
        this.comentario = comentario;
    }
}
/* export class ProveedorAll {
    id?: number;
    codigo!: string;
    ruc!: number;
    fechaInicio!: Date;
    nombre!: string;
    rubro!: string;
    comentario!: string;
    direcciones!: Direccion;
}

export class Direccion {
    id?: number;
    domicilio!: string;
    pais!: string;
    departamento!: string;
    provincia!: string;
    distrito!: string;
    ubigeo!: string;
   
}  */