import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css']
})
export class MaestroComponent implements OnInit {

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
