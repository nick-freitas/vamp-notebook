import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayCost'
})
export class ArrayCostPipe implements PipeTransform {
  transform(array: any[], cost?: boolean, negative?: boolean): number {
    return array.reduce((acc, field) => {
      let newVal = cost ? +field.cost : +field.points;
      if (negative) newVal = newVal * -1;
      return acc + newVal;
    }, 0);
  }
}
