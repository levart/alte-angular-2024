import { Component } from '@angular/core';
import {SubscribeService} from "../subscribe.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private subscribeService: SubscribeService
  ) {
  }

  subcribe() {
    this.subscribeService.subcribe();
  }
}
