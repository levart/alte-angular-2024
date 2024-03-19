import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {
  @Input() title: string = '';
  @Input() body: string = '';


  @Output() delete:  EventEmitter<void> = new EventEmitter<void>();
}
