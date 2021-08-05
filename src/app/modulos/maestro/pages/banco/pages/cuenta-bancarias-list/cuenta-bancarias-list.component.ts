import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BancoService } from '../../services/banco.service';
import { CuentaBancariaService } from '../../services/cuenta-bancaria.service';

@Component({
  selector: 'app-cuenta-bancarias-list',
  templateUrl: './cuenta-bancarias-list.component.html',
  styleUrls: ['./cuenta-bancarias-list.component.css']
})
export class CuentaBancariasListComponent implements OnInit {

  idBanco!: number;
  cuentaForm!: FormGroup;

  bancos!: Array<any>;
  cuentas!: Array<any>;

  constructor(
    public fb: FormBuilder,
    private routeActive: ActivatedRoute,
    private bancoService: BancoService,
    private cuentaService: CuentaBancariaService,
  ) { }

  ngOnInit(): void {
    this.idBanco = +this.routeActive.snapshot.params['id'];
    
    this.cuentaForm = this.fb.group({
      id : [''],
      num: ['', Validators.required],
      cci: ['', Validators.required],
      moneda: ['', Validators.required]
    });;

    this.bancoService.getBancoById(this.idBanco).subscribe(
      dataBanco => {
        this.bancos = dataBanco;
      });

    this.getCuentasByIdBanco();
  }

  //------------ AREA C-R-U-D ------------
  //CREATE CUENTA BY ID BANCO
  createCuenta(): void{
    this.cuentaService.createCuenta(this.idBanco, this.cuentaForm.value).subscribe(
      data => {
        this.cuentaForm.reset();
        this.getCuentasByIdBanco();
        console.log(data);
      },
      error => {
        console.log(error);
      });  
  }
  
  //READ CUENTA BY ID BANCO
  private getCuentasByIdBanco(){
    this.cuentaService.getCuentasById(this.idBanco).subscribe(
      data => {
        this.cuentas = data;
        console.log(data);
      },
      err => {
        console.log(err);
      });
  }

  //UPDATE CUENTA BY ID BANCO
  updateCuenta(cuenta: {id:any, num: string, cci: string, moneda: string}) {
    this.cuentaForm.setValue({
      id:cuenta.id,
      num: cuenta.num,
      cci: cuenta.cci,
      moneda: cuenta.moneda
   })
  }

  //DELETE CUENTA BY ID BANCO
  deleteCuenta(idCuenta:number) {
    this.cuentaService.deleteCuenta(this.idBanco, idCuenta).subscribe(
      data => {
      if(data===true){
        this.getCuentasByIdBanco();
      }
    });
  }

}
