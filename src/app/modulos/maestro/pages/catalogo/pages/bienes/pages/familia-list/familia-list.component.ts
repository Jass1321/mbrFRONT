import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FamiliaService } from '../../../../services/familia.service';
import { SubfamiliaService } from '../../../../services/subfamilia.service';

@Component({
  selector: 'app-familia-list',
  templateUrl: './familia-list.component.html',
  styleUrls: ['./familia-list.component.css']
})
export class FamiliaListComponent implements OnInit {

  idFam!: number;

  famForm!: FormGroup;
  subForm!: FormGroup;

  familias!: Array<any>;
  subfamilias!: Array<any>;

  totalPagesFam!: Array<number>;
  totalPagesSub!: Array<number>;

  //PAGINACION
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private route: Router,
    public fb: FormBuilder,   
    private famService: FamiliaService,
    private subService: SubfamiliaService,
  ) { }

  ngOnInit(): void {
    this.famForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required]
    });;

    this.subForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      familia: ['']
    });;

    this.famService.getById(this.idFam).subscribe(
      data=> {
        this.familias = data;
    });

    this.getAllFamilias();  
    this.getAllSubfamilias();
  }

  //------------ FAMILIA C-R-U-D ------------
  //CREATE FAM
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
  //READ FAM
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
  //UPDATE FAM
  onUpdateFam(familia: {id:any, nombre: string}) {
    this.famForm.setValue({
      id:familia.id,
      nombre: familia.nombre 
   })
  }
  //DELETE FAM
  onDeleteFam(id: number) {
    this.famService.delete(id).subscribe(
      data => {
        this.getAllFamilias()
      });
  }
  //SEARCH FAM
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

   //----------- VIEW SUBFAMILIAS BY ID FAM---------
   viewSubfamilias(id: number) {
    this.route.navigate(['/maestro/catalogo/bienes/detail/subfamilia', id]);
  }

  //------------SUBFAMILIA R-U-D------------
  //SAVE SUBFAMILIA 
  onCreateSub(): void{
    this.subService.save(this.subForm.value).subscribe(
      data => {
        this.subForm.reset();
        this.getAllSubfamilias();
        console.log(data);
      },
      error => {
        console.log(error);
      });  
  }
  //READ SUB
  private getAllSubfamilias(){
    this.subService.getListWithPage(this.page, this.size, this.order, this.asc).subscribe( 
      data => {
        this.subfamilias = data.content; 
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPagesSub = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  //UPDATE SUB
  onUpdateSub(subfamilia: {id:any, nombre: string, familia: any}) {
    this.subForm.setValue({
      id:subfamilia.id,
      nombre: subfamilia.nombre,
      familia: subfamilia.familia
   })
  }
  //DELETE SUB 
  onDeleteSub(id:number) {
    this.subService.remove(id).subscribe(
      data => {
      if(data===true){
        this.getAllSubfamilias();
      }
    });
  }
   //SEARCH SUB
   setOrderSub(order: string): void {
    this.order = order;
    this.getAllSubfamilias();
  }
  sortSub(): void {
    this.asc = !this.asc;
    this.getAllSubfamilias();
  }
  //PAGINACION
  rewindSub(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllSubfamilias();
    }
  }
  forwardSub(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllSubfamilias();
    }
  }
  setPageSub(page: number): void {
    this.page = page;
    this.getAllSubfamilias();
  }

}
