import {
  AfterContentChecked,
  AfterContentInit,
  Component, ContentChild,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent implements OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy{
  @Input() authorCount: number = 0;
  @Input() authors: number[] = [];
  @Input() author: {
    name: string,
    age: number
  } = {
    name: 'John',
    age: 25
  }

  // private _authorCount: number = 0;
  //
  // get authorCount(): number {
  //   return this._authorCount;
  // }
  //
  // @Input()
  // set authorCount(value: number) {
  //   console.log('set authorCount', value)
  //   this._authorCount = value * 2;
  // }

  timer = 0

  interval: any;
  constructor() {
    console.log('constructor', this.authorCount)
  }

  ngOnInit() {
    console.log('ngOnInit', this.authorCount)

    this.interval = setInterval(() => {
      console.log('timer', this.timer++)
    }, 1000)
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChanges', changes)
    // if (changes['authorCount']) {
    //   console.log('ngOnChanges authorCount', changes['authorCount'])
    // }
  }

  ngDoCheck() {
    console.log('ngDoCheck')
    // console.log('ngDoCheck authorCount', this.authorCount)
    // console.log('ngDoCheck authors', this.authors)
    // console.log('ngDoCheck author', this.author)
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
    clearInterval(this.interval)
  }

}
