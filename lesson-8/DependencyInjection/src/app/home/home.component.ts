import { Component } from '@angular/core';
import {SubscribeService} from "../subscribe.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private subscribeService: SubscribeService
  ) {
  }

  subcribe() {
    this.subscribeService.subcribe();
  }
}
