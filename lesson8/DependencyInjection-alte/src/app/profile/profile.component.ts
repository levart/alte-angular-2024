import {Component, Inject, inject} from '@angular/core';
import { SubscribeService } from '../subscribe.service';
import {SUBSCRIBE_SERVICE} from "../tokens";
import {LoggerService} from "../logger.service";

const subscribeServiceMockFactory = (loggerService: LoggerService) => {
  return {
    sudcribe() {
      loggerService.log('subcribe from use factory');
    }
  }
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  providers: [{
    provide: SUBSCRIBE_SERVICE,
    // useClass: SubscribeService
    // useValue: {
    //   subcribe() {
    //     console.log('subcribe');
    //   }
    // }
    useFactory: subscribeServiceMockFactory,
    deps: [LoggerService]
  },LoggerService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  // subscribeService = inject(SubscribeService)

  constructor(
    @Inject(SUBSCRIBE_SERVICE) private subscribeService: any
  ) {
  }

  subcribe() {
    this.subscribeService.sudcribe();
  }
}
//
// const profile = new ProfileComponent(new SubscribeService());
// const profile1 = new ProfileComponent(new SubscribeService());
// const profile2 = new ProfileComponent(new SubscribeService());


