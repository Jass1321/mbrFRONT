import { Cliente } from "./cliente";
import { Proveedor } from "./proveedor";

export class DireccionTercero{
  public id: number | undefined | null;
  public domicilio: string | undefined;
  public pais: string | undefined;
  public departamento: string="";
  public provincia: string="";
  public distrito: string="";
  public ubigeo: string="";
  public proveedorId!: number | Proveedor  | null;
  public clienteId!: number | Cliente | null 
}
