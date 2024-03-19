import {AfterViewInit, Component, ComponentRef, signal, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent,
    NgIf
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit{

  isLoogedIn = true;

  @ViewChild(ChildComponent) childCompRef: any;

  childIsVisible = false;


  constructor() {
    console.log('ParentComponent constructor', this.childCompRef);
  }

  ngAfterViewInit() {
    console.log('ParentComponent ngAfterViewInit', this.childCompRef);
  }

  helloHandle() {
    console.log('Hello handler');
    if (this.childCompRef) {
      this.childCompRef.hello();
    }
  }

  logout($event: boolean) {
    this.isLoogedIn = $event;
  }

  createChild() {
    this.childIsVisible = !this.childIsVisible;
  }
}
