import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../../../../services/banco.service';
import { CuentaBancariaService } from '../../../../services/cuenta-bancaria.service';

@Component({
  selector: 'app-cuenta-listado',
  templateUrl: './cuenta-listado.component.html',
  styleUrls: ['./cuenta-listado.component.css']
})
export class CuentaListadoComponent implements OnInit {

  cuentaForm!: FormGroup;
  bancos: any;
  cuentas: any;
  
  constructor(
    public fb: FormBuilder,
    public cuentaService: CuentaBancariaService,
    public bancoService: BancoService,
    
  ) { }

  ngOnInit(): void {
    this.cuentaForm = this.fb.group({
      id: [''],
      num: ['', Validators.required],
      cci: ['', Validators.required],
      moneda: ['', Validators.required],
      banco: ['', Validators.required]
    });;

    this.bancoService.getBancos().subscribe(resp => {
      this.bancos = resp;
    },
      error => { console.error(error) }
    );

    this.cuentaService.getAllCuentas().subscribe(resp => {
      this.cuentas = resp;
    },
      error => { console.error(error) }
    );

  }

  
  guardar(): void {
    this.cuentaService.saveCuenta(this.cuentaForm.value).subscribe(resp => {
      this.cuentaForm.reset();
      this.cuentas=this.cuentas.filter(
        (cuenta: { id: any; }) => resp.id!==cuenta.id);
      this.cuentas.push(resp);
    },
      error => { console.error(error) }
    )
  }

  eliminar(cuenta: { id: number; }){
    this.cuentaService.deleteCuenta(cuenta.id).subscribe(resp=>{
      if(resp===true){
        this.cuentas.pop(cuenta)
      }
    })
  }

  editar(cuenta: { id: any; num: number; cci: number; moneda: string; banco: any; }){
    this.cuentaForm.setValue({
      id:cuenta.id,
      num: cuenta.num ,
      cci: cuenta.cci ,
      moneda: cuenta.moneda,
      banco: cuenta.banco,
   })
  }
}
