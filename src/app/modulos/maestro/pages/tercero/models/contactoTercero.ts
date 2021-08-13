import { Cliente } from "./cliente";
import { Proveedor } from "./proveedor";

export class ContactoTercero {
    public id: number | undefined | null;
    public nombre: string | undefined;
    public correo: string | undefined;
    public cargo: string | undefined;
    public telefono: string | undefined;
    public proveedorId!: number | Proveedor  | null;
    public clienteId!: number | Cliente | null;
}

export class Contacto_Tercero {

    constructor(
        public id: number,
        public nombre: string,
        public correo: string,
        public cargo: string,
        public telefono: string,
        public proveedorId: number | Proveedor ,
        public clienteId: number | Cliente,
    ){
        this.id=id;
        this.nombre=nombre;
        this.correo=correo;
        this.cargo=cargo;
        this.telefono=telefono;
        this.proveedorId= proveedorId;
        this.clienteId= clienteId
    }
  
}