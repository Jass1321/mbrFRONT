import { Cliente } from "./cliente";
import { Proveedor } from "./proveedor";

export class ContactoTercero {
    public id: number | undefined | null;
    public nombre: string | undefined;
    public correo: string | undefined;
    public cargo: string | undefined;
    public telefono: string | undefined;
    public proveedorId!: number | Proveedor  | null;
    public clienteId: Cliente | undefined | null;
}