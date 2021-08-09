import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProveedor'
})
export class FilterProveedorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const resultProv = [];
    for(const item of value){
      if(item.codigo.toLowerCase().indexOf(arg) > -1) {
         resultProv.push(item);
      };
      if(item.ruc.toLowerCase().indexOf(arg) > -1) {
        resultProv.push(item);
     };
      if(item.razonSocial.toLowerCase().indexOf(arg) > -1) {
         resultProv.push(item);
      };
      if(item.rubroActividad.toLowerCase().indexOf(arg) > -1) {
         resultProv.push(item);
      };
      if(item.fechaInicio.toLowerCase().indexOf(arg) > -1) {
        resultProv.push(item);
     };
    };
    return resultProv;
  }


}
