import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  navLinks = [
    { path: '/maestro/tercero',     label: 'Terceros'},
    { path: '/maestro/banco',       label: 'Bancos' },
    { path: '/maestro/catalogo',    label: 'Catálogos' },
    { path: '/maestro/organizacion',label: 'Organización' }
  ];
  activeLink = this.navLinks[0];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

}
