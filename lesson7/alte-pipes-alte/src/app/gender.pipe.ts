import {Pipe, PipeTransform} from '@angular/core';
import {Gender} from "./gender.enum";

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    if (value === 'MALE') {
      return 'მამრობითი';
    } else {
      return 'უცნობი';
    }
  }

}
