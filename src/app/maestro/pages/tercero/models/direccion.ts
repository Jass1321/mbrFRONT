//import { Proveedor } from "./proveedor";
import { Proveedor } from "./proveedor";

export class Direccion{
    constructor (
        public id: number | undefined | null,
        public domicilio: string | undefined,
        public pais: string | undefined,
        public departamento: string="",
        public provincia: string="",
        public distrito: string="",
        public ubigeo: string="",
    ){}
}