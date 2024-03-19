import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 1) {
      return 'აქტიური';
    } else if (value === 2) {
      return 'გაუქმებული';
    } else {
      return 'უცნობი';
    }
  }

}
