import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaBonita'
})
export class FechaBonitaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
