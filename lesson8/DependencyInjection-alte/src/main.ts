import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {SubscribeService} from "./app/subscribe.service";
import {LoggerService} from "./app/logger.service";
import {SubscribeV2Service} from "./app/subscribe-v2.service";
import {SUBSCRIBE_SERVICE} from "./app/tokens";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

const subscribeServiceMockFactory = (loggerService: LoggerService) => {
  return {
    sudcribe() {
      loggerService.log('subcribe from use factory');
    }
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {
      provide: SubscribeService,
      useClass: SubscribeV2Service,
      // useValue: {
      //   subcribe() {
      //     console.log('subcribe');
      //   }
      // }
      useFactory: subscribeServiceMockFactory,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerService,
    }
  ]
})
  .catch((err) => console.error(err));
