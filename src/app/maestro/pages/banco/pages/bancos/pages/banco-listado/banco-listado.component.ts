import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BancoService } from '../../../../services/banco.service';

@Component({
  selector: 'app-banco-listado',
  templateUrl: './banco-listado.component.html',
  styleUrls: ['./banco-listado.component.css']
})
export class BancoListadoComponent implements OnInit {

  
  bancoForm!: FormGroup;
  bancos!: Array<any>;
  totalPages!: Array<number>;

  //PAGINACION
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private bancoService: BancoService,
    private route: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.bancoForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required]
    });;

    this.getAllDepas();
  }

  //CREATE DEPA
  createDep(): void {
    this.bancoService.createBanco(this.bancoForm.value).subscribe(
      data=>{
        this.bancoForm.reset();
        this.getAllDepas();
        },
      err => {
        console.log(err)
      }
    )
  }

  //READ DEPA
  private getAllDepas(){
    this.bancoService.getListAllDepa(this.page, this.size, this.order, this.asc).subscribe( 
      data => {
        this.bancos = data.content; 
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
