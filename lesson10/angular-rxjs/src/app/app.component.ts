import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {filter, first, from, last, map, of, reduce, take, takeLast, tap} from "rxjs";
import {TimerComponent} from "./timer/timer.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimerComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('clickbtn') clickbtn!: any;
  @ViewChild('canvas') canvas: any;

  showTimer = false;



  ngOnInit() {
    console.log('App component initialized');

    // const subsc = new Observable( (observer) => {
    //   observer.next('Hello RxJS');
    //   observer.next('Hello RxJS 2');
    //   observer.next('Hello RxJS 3');
    //   setTimeout(() => {
    //     observer.next('Hello RxJS 4');
    //   },2000)
    //   observer.error('Error Here')
    //   // observer.complete();
    //   // observer.next('Hello RxJS 5');
    //   // observer.next('Hello RxJS 6');
    // })
    //
    // subsc.subscribe( {
    //   next: (data) => console.log('next', data),
    //   error: (error) => console.error(error),
    //   complete: () => console.log('Complete')
    // })

    // interval(1000)
    //   .subscribe((data) => {
    //     console.log('interval', data);
    //   })
  }

  ngAfterViewInit() {
    // fromEvent(this.clickbtn.nativeElement, 'click')
    //   .subscribe((event) => {
    //     console.log('click event', event);
    //   })

    // fromEvent(this.canvas.nativeElement, 'mousemove')
    //   .subscribe((event: any) => {
    //     console.log('mouse move event', event);
    //     const ctx = this.canvas.nativeElement.getContext('2d');
    //     ctx.beginPath();
    //     ctx.arc(event.offsetX, event.offsetY, 5, 0, 2 * Math.PI);
    //     ctx.fill();
    //   })


    //from()
    from([{
      name: 'John',
      age: 25
    }, {
      name: 'Doe',
      age: 30
    }, {
      name: 'Doe',
      age: 43
    }, {
      name: 'Doe',
      age: 23
    }])
      .pipe(
        // take(1),
        // takeLast(1),
        // first(),
        // last(),
        // filter((data: any) => {
        //   console.log('filter', data);
        //   return data.age > 25;
        // }),
        reduce((acc, data: any) => {
          // console.log('reduce', acc, data);
          return +acc + +data.age;
        }, 0),
      )
      .subscribe((data) => {
        console.log('from', data);
      })


    //of()

    // of([{
    //   name: 'John',
    //   age: 25
    // }, {
    //   name: 'Doe',
    //   age: 30
    // }])
    //   .pipe(
    //     filter((data: any) => {
    //       console.log('filter', data);
    //       return data.age > 25;
    //     }),
    //   )
    //   .subscribe((data) => {
    //     console.log('of', data);
    //   })
  }

  toggleTimer() {
    this.showTimer = !this.showTimer;
  }
}
