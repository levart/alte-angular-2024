import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() login!: boolean;
  @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>();

  name = 'John';

  constructor() {
    console.log('ChildComponent constructor');
  }

  //  hello() {
  //   alert('Hello '+ this.name)
  // }

  logoutHandle() {
    this.logout.emit(false);
  }
}
