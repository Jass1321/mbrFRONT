import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Departamento } from '../../../../models/departamento';
import { DepartamentoService } from '../../../../services/departamento.service';

@Component({
  selector: 'app-departamento-nuevo',
  templateUrl: './departamento-nuevo.component.html',
  styleUrls: ['./departamento-nuevo.component.css']
})
export class DepartamentoNuevoComponent implements OnInit {

  dep: Departamento = new Departamento();
  alert: boolean = false;

  constructor(
    private router: Router,
    private dialogRef : MatDialogRef<DepartamentoNuevoComponent>,
    private depService: DepartamentoService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
 
 
  ngOnInit(): void {
  }
  
  onSubmit() {
    this.depService.createDepartamento(this.dep).subscribe(
      data => {
        this.alert = true;
      },
      error => console.log(error));
  }
  closeAlert(){
    this.alert = false;
  }

}

  /* //---------------------Cerrar dialogo
  onClose(): void {
    //this.proveedorService.form.reset();
    //this.proveedorService.initializeFormGroup();
    this.dialogRef.close();
    this.router.navigate(['/maestro/organizacion/departamentos/list'])
  } */
