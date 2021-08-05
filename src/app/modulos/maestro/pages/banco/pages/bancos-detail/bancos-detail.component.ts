import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-bancos-detail',
  templateUrl: './bancos-detail.component.html',
  styleUrls: ['./bancos-detail.component.css']
})
export class BancosDetailComponent implements OnInit {

  bancoForm!: FormGroup;
  bancos!: Array<any>;
  totalPagesBanco!: Array<number>;
  
  //PAGINACION
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    public fb: FormBuilder,
    private route: Router,
    private bancoService: BancoService,
  ) { }

  ngOnInit(): void {
    this.bancoForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required]
    });;

    this.getAllBancos();  
  }

  //------------ BANCO C-R-U-D ------------
  //CREATE BANCO
  createBanco(): void {
    this.bancoService.createBanco(this.bancoForm.value).subscribe(
      data=>{
        this.bancoForm.reset();
        this.getAllBancos();
        },
      err => {
        console.log(err)
      }
    )
  }
  //READ BANCO
  private getAllBancos(){
    this.bancoService.getListAllBanco(this.page, this.size, this.order, this.asc).subscribe( 
      data => {
        this.bancos = data.content; 
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPagesBanco = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  //UPDATE BANCO
  updateBanco(banco: {id:any, nombre: string}) {
    this.bancoForm.setValue({
      id:banco.id,
      nombre: banco.nombre 
   })
  }
  //DELETE DEPA
  deleteBanco(id: number) {
    this.bancoService.deleteBanco(id).subscribe(
      data => {
        this.getAllBancos()
      });
  }
  //SEARCH DEPA
  setOrderBanco(order: string): void {
    this.order = order;
    this.getAllBancos();
  }
  sortBanco(): void {
    this.asc = !this.asc;
    this.getAllBancos();
  }
  //PAGINACION
  rewindBanco(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllBancos();
    }
  }
  forwardBanco(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllBancos();
    }
  }
  setPageBanco(page: number): void {
    this.page = page;
    this.getAllBancos();
  }

   //----------- BACk TO LIST BANCO AND CUENTA ---------
   backList() {
    this.route.navigate(['/maestro/banco/list']);
  }


}
