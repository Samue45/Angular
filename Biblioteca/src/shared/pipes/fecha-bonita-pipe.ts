import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaBonita'
})
export class FechaBonitaPipe implements PipeTransform {

  // 1º Recibe como valor una instancia de Date y devuelve una cadena de texto con el formato "DD de MM de AAAA". 
  transform(value: Date): string {
    // Verificar si el valor es nulo o indefinido
    if (!value) {
      return '';
    }
    
    // Obtener el día, mes y año
    const day = value.getDate();
    const month = value.getMonth() + 1; // Los meses comienzan en 0
    const year = value.getFullYear();

    // Devolver la fecha en el formato deseado
    return `${day} de ${month} de ${year}`;

  }

}
