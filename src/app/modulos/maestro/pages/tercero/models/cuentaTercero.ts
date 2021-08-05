import { Proveedor } from "./proveedor";

export class CuentaTercero {
    public id: number | undefined | null;
    public num: string | undefined;
    public cci: string | undefined;
    public moneda: string | undefined;
    public entidad: string | undefined;
    public tipoCuenta: string | undefined;
    public proveedorId!: number | Proveedor  | null;
}