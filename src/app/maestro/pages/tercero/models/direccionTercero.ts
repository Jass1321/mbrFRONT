import { Cliente } from "./cliente";
import { Proveedor } from "./proveedor";

export class DireccionTercero{
   

    constructor(
        public id: number,
        public domicilio: string,
        public pais: string,
        public departamento: string,
        public provincia: string,
        public distrito: string,
        public ubigeo: string,
      //  proveedorId: Proveedor | undefined | null;
    ){ }
   

}

/*
export class DireccionTercero{
    id?: number;
    domicilio: string;
    pais: string;
    departamento: string;
    provincia: string;
    distrito: string;
    ubigeo: string;

    constructor(
         domicilio: string,
         pais: string,
         departamento: string,
         provincia: string,
         distrito: string,
         ubigeo: string,
      //  proveedorId: Proveedor | undefined | null;
    ){

        this.domicilio = domicilio;
        this.pais = pais;
        this.departamento = departamento;
        this.provincia = provincia;
        this.distrito = distrito;
        this.ubigeo = ubigeo;
    }
   

}

*/