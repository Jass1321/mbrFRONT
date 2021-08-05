import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BancoService } from '../../services/banco.service';
import { CuentaBancariaService } from '../../services/cuenta-bancaria.service';

@Component({
  selector: 'app-bancos-list',
  templateUrl: './bancos-list.component.html',
  styleUrls: ['./bancos-list.component.css']
})
export class BancosListComponent implements OnInit {

  idBanco!: number;

  bancoForm!: FormGroup;
  cuentaForm!: FormGroup;

  bancos!: Array<any>;
  cuentas!: Array<any>;
  
  totalPagesBanco!: Array<number>;
  totalPagesCuenta!: Array<number>;

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
    private cuentaService: CuentaBancariaService,
  ) { }

  ngOnInit(): void {
    this.bancoForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required]
    });;

    this.cuentaForm = this.fb.group({
      id : [''],
      num: ['', Validators.required],
      cci: ['', Validators.required],
      moneda: ['', Validators.required],
      banco: ['']
    });;

    this.bancoService.getBancoById(this.idBanco).subscribe(
      dataBanco => {
        this.bancos = dataBanco;
    });

    this.getAllBancos();  
    this.getAllCuentas();
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

   //----------- VIEW CUENTA BY ID BANCO ---------
   viewCuentas(id: number) {
    this.route.navigate(['/maestro/banco/detail/banco', id]);
  }

  //------------ CUENTA R-U-D------------
  //SAVE CUENTA 
  createCuenta(): void{
    this.cuentaService.saveCuenta(this.cuentaForm.value).subscribe(
      data => {
        this.cuentaForm.reset();
        this.getAllCuentas();
        console.log(data);
      },
      error => {
        console.log(error);
      });  
  }
  //READ CUENTA
  private getAllCuentas(){
    this.cuentaService.getListAllCuentaBancarias(this.page, this.size, this.order, this.asc).subscribe( 
      data => {
        this.cuentas = data.content; 
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPagesCuenta = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  //UPDATE CUENTA 
  updateCuenta(cuenta: {id:any, num: string, cci: string, moneda: string,  banco: any}) {
    this.cuentaForm.setValue({
      id:cuenta.id,
      num: cuenta.num,
      cci: cuenta.cci,
      moneda: cuenta.moneda,
      banco: cuenta.banco
   })
  }
  //DELETE CUENTA 
  deleteCuenta(id:number) {
    this.cuentaService.removeCuenta(id).subscribe(
      data => {
      if(data===true){
        this.getAllCuentas();
      }
    });
  }
   //SEARCH AREA
   setOrderCuenta(order: string): void {
    this.order = order;
    this.getAllCuentas();
  }
  sortCuenta(): void {
    this.asc = !this.asc;
    this.getAllCuentas();
  }
  //PAGINACION
  rewindCuenta(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllCuentas();
    }
  }
  forwardCuenta(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllCuentas();
    }
  }
  setPageCuenta(page: number): void {
    this.page = page;
    this.getAllCuentas();
  }

}
