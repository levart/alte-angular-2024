import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorsComponent} from "./authors/authors.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'ng-lifecycle';
  @ViewChild('afterEl') afterEl: any;

  authorCount: number = 0;
  authors: number[] = [1,2,3,4,5,6,7,8,9,10];
  author = {
    name: 'John',
    age: 25
  }

  visible = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    console.log('constructor',this.title)
  }

  ngOnInit() {
    console.log('ngOnInit',this.title)
    console.log('ngOnInit afterEl',this.afterEl)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit',this.title)
    console.log('ngAfterViewInit afterEl',this.afterEl)
  }


  addAuthorCount() {
    this.authorCount++;
  }

  decreaseAuthorCount() {
    this.authorCount--;
  }

  setCount(count: number) {
    console.log('setCount', count)
    this.authorCount = count;

    // this.author.age = count;
    // this.author = {
    //   ...this.author,
    //   age: count
    // }

    // this.author = Object.assign({}, this.author, {age: count})

    this.authors.push(count);
    this.author.age = count;
  }


}
