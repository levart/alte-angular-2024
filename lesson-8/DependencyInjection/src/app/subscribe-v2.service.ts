import {Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable()
export class SubscribeV2Service {

  constructor(
    private loggerService: LoggerService
  ) {
  }
  subcribe() {
    this.loggerService.log('You have successfully subscribed to our newsletter')
  }
}
