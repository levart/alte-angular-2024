import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet} from "@angular/common";
import {StructuralComponent} from "./structural/structural.component";
import {AtributeComponent} from "./atribute/atribute.component";
import {MyIfDirective} from "./directives/my-if.directive";

export enum UserType {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuralComponent, AtributeComponent, NgTemplateOutlet, NgIf, MyIfDirective,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
