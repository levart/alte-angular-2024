import { Component } from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {HighlighterDirective} from "../directives/highlighter.directive";
import {MyStyleDirective} from "../directives/my-style.directive";
import {MyClassDirective} from "../directives/my-class.directive";

@Component({
  selector: 'app-atribute',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    HighlighterDirective,
    MyStyleDirective,
    MyClassDirective
  ],
  templateUrl: './atribute.component.html',
  styleUrl: './atribute.component.scss'
})
export class AtributeComponent {

  hasError = true;
}
