import { Pipe, PipeTransform } from '@angular/core';
import {User} from "./user";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], search: string): User[] {
    return value.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
  }

}
