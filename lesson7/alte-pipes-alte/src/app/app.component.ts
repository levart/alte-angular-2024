import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe, NgFor, NgForOf,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";
import {User} from "./user";
import {Gender} from "./gender.enum";
import {GenderPipe} from "./gender.pipe";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./filter.pipe";
import {StatusPipe} from "./status.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    JsonPipe,
    GenderPipe,
    NgFor,
    FormsModule,
    FilterPipe, StatusPipe
  ],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // today = new Date();
  // today2 = this.datePipe.transform(this.today, 'yyyy-MM-dd', '+4','ka');
  //
  // user = {
  //   name: 'John Doe',
  //   age: 25
  // };

  // constructor(
  //   private datePipe: DatePipe
  // ) {
  // }

  search = '';


  users: User[] = [
    {
      name: 'John MALE',
      age: 34,
      gender: 'MALE',
      status: 1
    },
    {
      name: 'Jane FAMALE',
      age: 12,
      gender: 'FEMALE',
      status: 2
    },
    {
      name: 'Jane UNKNOW',
      age: 16,
      gender: 'UNKNOWN',
      status: 3
    },
    {
      name: 'Jane UNKNOW',
      age: 16,
      gender: 'UNKNOWN',
      status: 3
    }
  ]



}
