import { Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry} from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MAESTRO, ALMACEN, GASTOS, VENTAS, COMPRAS, FINANZAS} from '../../extra/iconos/icon';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
    ) {
      iconRegistry.addSvgIconLiteral('almacen_icon', sanitizer.bypassSecurityTrustHtml(ALMACEN));
      iconRegistry.addSvgIconLiteral('maestro_icon', sanitizer.bypassSecurityTrustHtml(MAESTRO));
      iconRegistry.addSvgIconLiteral('gastos_icon', sanitizer.bypassSecurityTrustHtml(GASTOS));
      iconRegistry.addSvgIconLiteral('ventas_icon', sanitizer.bypassSecurityTrustHtml(VENTAS));
      iconRegistry.addSvgIconLiteral('compras_icon', sanitizer.bypassSecurityTrustHtml(COMPRAS));
      iconRegistry.addSvgIconLiteral('finanzas_icon', sanitizer.bypassSecurityTrustHtml(FINANZAS));
    }
   
    ngOnInit(): void {}
  
  //MENU-SIDENAV

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  isShowing = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

 

  /*CERRAR SESION
  isLogged = false;
  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    }else {
      this.isLogged = false;
    };

  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }*/

}
