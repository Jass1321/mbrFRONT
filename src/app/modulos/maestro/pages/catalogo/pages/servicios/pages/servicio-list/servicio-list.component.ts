import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../../../services/servicio.service';
import { TipoServicioService } from '../../../../services/tipo-servicio.service';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {

  idTipo!:number;
  servForm!: FormGroup;

  tipos!: Array<any>;
  servicios!: Array<any>;

  constructor(
    private fb: FormBuilder,
    private routeActive: ActivatedRoute,
    private tipoService: TipoServicioService,
    private servService: ServicioService,
  ) { }

  ngOnInit(): void {

    this.idTipo = +this.routeActive.snapshot.params['id'];

    this.servForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required]
    });;

    this.tipoService.getById(this.idTipo).subscribe(
      data => {
        this.tipos = data;
      });

    this.getByIdTipo();
  }

  onCreateServicio(): void {
    this.servService.create(this.idTipo, this.servForm.value).subscribe(
      data => {
        this.servForm.reset();
        this.getByIdTipo();
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  //READ SUB
  private getByIdTipo() {
    this.servService.getById(this.idTipo).subscribe(
      data => {
        this.servicios = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  //UPDATE SUB BY ID FAM
  onUpdateServicio(servicio: { id: any, nombre: string }) {
    this.servForm.setValue({
      id: servicio.id,
      nombre: servicio.nombre,
    })
  }
  //DELETE SUB  BY ID FAM
  onDeleteServicio(idSub: number) {
    this.servService.delete(this.idTipo, idSub).subscribe(
      data => {
          this.getByIdTipo();
      });
  }
}
