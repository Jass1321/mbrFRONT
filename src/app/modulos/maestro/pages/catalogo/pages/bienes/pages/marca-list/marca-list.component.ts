import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarcaService } from '../../../../services/marca.service';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  marcaForm!: FormGroup;
  marcas!: Array<any>;
  totalPagesFam!: Array<number>;

  //PAGINACION
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private marcaService: MarcaService,
  ) { }

  ngOnInit(): void {
    this.marcaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required]
    });;

    this.getAllMarcas();
  }

  //------------ MARCA C-R-U-D ------------
  //CREATE 
  onCreateMarca(): void {
    this.marcaService.create(this.marcaForm.value).subscribe(
      data => {
        this.marcaForm.reset();
        this.getAllMarcas();
      },
      err => {
        console.log(err)
      }
    )
  }
  //READ 
  private getAllMarcas() {
    this.marcaService.getListWithPage(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.marcas = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPagesFam = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  //UPDATE DEPA
  onUpdateMarca(marca: { id: any, nombre: string }) {
    this.marcaForm.setValue({
      id: marca.id,
      nombre: marca.nombre
    })
  }
  //DELETE DEPA
  onDeleteMarca(id: number) {
    this.marcaService.delete(id).subscribe(
      data => {
        this.getAllMarcas()
      });
  }
  //SEARCH DEPA
  setOrderMarca(order: string): void {
    this.order = order;
    this.getAllMarcas();
  }
  sortMarca(): void {
    this.asc = !this.asc;
    this.getAllMarcas();
  }
  //PAGINACION
  rewindMarca(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllMarcas();
    }
  }
  forwardMarca(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllMarcas();
    }
  }
  setPageMarca(page: number): void {
    this.page = page;
    this.getAllMarcas();
  }

}
