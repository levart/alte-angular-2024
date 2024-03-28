import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit, OnDestroy{
  counter = 0;
  subscription: Subscription | undefined;

  // interval: any;
  ngOnInit() {
    this.subscription?.add(interval(1000)
      .subscribe((data) => {
        console.log('interval', data);
        this.counter = data;
      })
    )

    // this.interval = setInterval(() => {
    //   this.counter++;
    //   console.log('counter', this.counter);
    // }, 1000);

    this.subscription?.add(interval(1000)
      .subscribe((data) => {
        console.log('interval', data);
        this.counter = data;
      })
    )

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();

    // clearInterval(this.interval)
  }
}
