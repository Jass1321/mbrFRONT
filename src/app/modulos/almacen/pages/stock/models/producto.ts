import { Marca } from "src/app/modulos/maestro/pages/catalogo/models/marca";
import { Subfamilia } from "src/app/modulos/maestro/pages/catalogo/models/subfamilia";

export class Producto {
    id: number | undefined | null;
    codigo: string | undefined;
    nombre: string | undefined;
    subfamilia!: number | Subfamilia | null;
    marca!: number | Marca; 
    color: string | undefined;
    medida: string | undefined;
    precio: string | undefined;
    estado: boolean | undefined;
} 
