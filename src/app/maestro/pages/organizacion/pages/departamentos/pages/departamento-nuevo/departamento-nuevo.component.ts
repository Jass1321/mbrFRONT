import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../../../models/departamento';
import { ToastrService } from 'ngx-toastr';
import { DepartamentoService } from '../../../../services/departamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento-nuevo',
  templateUrl: './departamento-nuevo.component.html',
  styleUrls: ['./departamento-nuevo.component.css']
})
export class DepartamentoNuevoComponent implements OnInit {

  dep: Departamento = new Departamento();
  alert: boolean = false;

  constructor(
    private depService: DepartamentoService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.depService.createDepartamento(this.dep).subscribe(
       data=>{
        this.alert = true;
        this.toastr.success('Producto creado!', 'OK!', {
          timeOut: 10000,
          positionClass: 'toast-top-left',
        });
     /*  this.router.navigate(['/maestro/organizacion/departamentos/list']); */
      },
      error => console.log(error));
  }
  closeAlert(){
    this.alert = false;
  }

}
