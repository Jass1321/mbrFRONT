import { Pais } from "./pais.data";
import { District, Region, Province } from "ubigeos";

 export interface DataUbigeoI {
    pais_groups: Pais[];
    depa_groups: Region[] | null;
    prov_groups: Province[] | null;
    dist_groups: District[] | null;
    ubigeo: string | null;
    show: boolean;
} 
/*
export interface Departamento{
    ID: string;
    name: string;
    prov: any[]
}
export interface Provincia {
    ID: string;
    name: string;
}
export interface Distrito {
    ID: string;
    name: string;
}
  
export interface UbigeoGroup {
    depa: Departamento[];
    prov: Provincia[];
    dist: Distrito[];
    code: string;
}
*/
