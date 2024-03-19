import {Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(
    private loggerService: LoggerService,
  ) {
  }
  subcribe() {
    this.loggerService.log('You have successfully subscribed to our newsletter')
  }
}
