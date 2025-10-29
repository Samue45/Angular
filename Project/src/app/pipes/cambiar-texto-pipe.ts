import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiarTexto'
})
export class CambiarTextoPipe implements PipeTransform {

  transform(value: string, mode: 'mayus'| 'minus' = 'mayus'): string | null {
    return mode === 'mayus'? value.toUpperCase() : value.toLowerCase();
  }

}
