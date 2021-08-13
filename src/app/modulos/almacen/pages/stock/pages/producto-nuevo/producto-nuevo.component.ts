import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/modulos/almacen/services/producto.service';
import { Familia } from 'src/app/modulos/maestro/pages/catalogo/models/familia';
import { Marca } from 'src/app/modulos/maestro/pages/catalogo/models/marca';
import { Subfamilia } from 'src/app/modulos/maestro/pages/catalogo/models/subfamilia';
import { FamiliaService } from 'src/app/modulos/maestro/pages/catalogo/services/familia.service';
import { MarcaService } from 'src/app/modulos/maestro/pages/catalogo/services/marca.service';
import { SubfamiliaService } from 'src/app/modulos/maestro/pages/catalogo/services/subfamilia.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-nuevo',
  templateUrl: './producto-nuevo.component.html',
  styleUrls: ['./producto-nuevo.component.css']
})
export class ProductoNuevoComponent implements OnInit {

  producto: Producto = new Producto();
  familias: Familia[] = [];
  marcas: Marca[] = [];
  subfamilias: Subfamilia[] = [];

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private marcaService: MarcaService,
    private familiaService: FamiliaService,
    private subfamiliaService: SubfamiliaService
  ) { }

  ngOnInit(): void {
    this.listFam();  
    this.listSub(); 
    this.listMarcas();
  }

  //Busqueda
  familiaElegida: any = null;


  onCreate(): void{
    this.productoService.create(this.producto).subscribe(
      data => {
        this.router.navigate(['/almacen/stock/list'])
      }
    )
  }

  listMarcas(): void{
    this.marcaService.getMarcas().subscribe(
      data => {
        this.marcas = data;
      }, 
      err => {
        console.log(err);
      }
    )
  }

  listFam(): void{
    this.familiaService.getFamilias().subscribe(
      data => {
        this.familias = data;
      }, 
      err => {
        console.log(err);
      }
    )
  }

  listSub(): void{
    this.subfamiliaService.getSubfamilia().subscribe(
      data => {
        this.subfamilias = data;
      }, 
      err => {
        console.log(err);
      }
    )
  }
}
