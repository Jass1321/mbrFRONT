import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FamiliaService } from '../../../../services/familia.service';

@Component({
  selector: 'app-familia-detail',
  templateUrl: './familia-detail.component.html',
  styleUrls: ['./familia-detail.component.css']
})
export class FamiliaDetailComponent implements OnInit {

  famForm!: FormGroup;
  familias!: Array<any>;
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
    private famService: FamiliaService,
  ) { }

  ngOnInit(): void {
    this.famForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required]
    });;

    this.getAllFamilias();  
  }

  //------------ FAMILIA C-R-U-D ------------
  //CREATE DEPA
  onCreateFam(): void {
    this.famService.create(this.famForm.value).subscribe(
      data=>{
        this.famForm.reset();
        this.getAllFamilias();
        },
      err => {
        console.log(err)
      }
    )
  }
  //READ DEPA
  private getAllFamilias(){
    this.famService.getListWithPage(this.page, this.size, this.order, this.asc).subscribe( 
      data => {
        this.familias = data.content; 
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPagesFam= new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  //UPDATE DEPA
  onUpdateFam(familia: {id:any, nombre: string}) {
    this.famForm.setValue({
      id:familia.id,
      nombre: familia.nombre 
   })
  }
  //DELETE DEPA
  onDeleteFam(id: number) {
    this.famService.delete(id).subscribe(
      data => {
        this.getAllFamilias()
      });
  }
  //SEARCH DEPA
  setOrderFam(order: string): void {
    this.order = order;
    this.getAllFamilias();
  }
  sortFam(): void {
    this.asc = !this.asc;
    this.getAllFamilias();
  }
  //PAGINACION
  rewindFam(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllFamilias();
    }
  }
  forwardFam(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllFamilias();
    }
  }
  setPageFam(page: number): void {
    this.page = page;
    this.getAllFamilias();
  }

   //----------- BACK LIST GENERAL ---------
   backList() {
    this.route.navigate(['/maestro/catalogo/bienes/list']);
  }

}
