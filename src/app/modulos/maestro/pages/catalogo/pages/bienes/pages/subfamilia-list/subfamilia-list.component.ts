import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FamiliaService } from '../../../../services/familia.service';
import { SubfamiliaService } from '../../../../services/subfamilia.service';

@Component({
  selector: 'app-subfamilia-list',
  templateUrl: './subfamilia-list.component.html',
  styleUrls: ['./subfamilia-list.component.css']
})
export class SubfamiliaListComponent implements OnInit {

  idFam!:number;
  subForm!: FormGroup;

  familias!: Array<any>;
  subfamilias!: Array<any>;

  constructor(
    private fb: FormBuilder,
    private routeActive: ActivatedRoute,
    private famService: FamiliaService,
    private subService: SubfamiliaService
  ) { }

  ngOnInit(): void {

    this.idFam = +this.routeActive.snapshot.params['id'];

    this.subForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required]
    });;

    this.famService.getById(this.idFam).subscribe(
      data => {
        this.familias = data;
      });

    this.getSubfamiliasByIdFam();
  }

  onCreateSub(): void {
    this.subService.create(this.idFam, this.subForm.value).subscribe(
      data => {
        this.subForm.reset();
        this.getSubfamiliasByIdFam();
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  //READ SUB
  private getSubfamiliasByIdFam() {
    this.subService.getById(this.idFam).subscribe(
      data => {
        this.subfamilias = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  //UPDATE SUB BY ID FAM
  onUpdateSub(subfamilia: { id: any, nombre: string }) {
    this.subForm.setValue({
      id: subfamilia.id,
      nombre: subfamilia.nombre,
    })
  }
  //DELETE SUB  BY ID FAM
  onDeleteSub(idSub: number) {
    this.subService.delete(this.idFam, idSub).subscribe(
      data => {
          this.getSubfamiliasByIdFam();
      });
  }

}
