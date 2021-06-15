import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../../../services/departamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Departamento } from '../../../../models/departamento';

@Component({
  selector: 'app-departamento-editado',
  templateUrl: './departamento-editado.component.html',
  styleUrls: ['./departamento-editado.component.css']
})
export class DepartamentoEditadoComponent implements OnInit {

  id!: number;
  dep: Departamento = new Departamento();
  alert: boolean = false;

  constructor(
    private depService: DepartamentoService,
    private router: Router,
    private routeActivate: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.routeActivate.snapshot.params['id'];
    this.depService.getDepById(this.id).subscribe(
      data => {
        this.dep = data;
      },
      error => console.log(error));
  }

  onSubmit() {
    this.depService.updateDepartamento(this.id, this.dep).subscribe(
       data=>{
        this.alert = true;
      },
      error => console.log(error));
  }

  closeAlert(){
    this.alert = false;
  }
  volver(): void {
    this.router.navigate(['/maestro/organizacion/departamentos/list']);
  }
}
