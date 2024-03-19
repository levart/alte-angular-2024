import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Some text';
  image = 'https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?cs=srgb&dl=pexels-nejc-ko%C5%A1ir-338936.jpg&fm=jpg'

  formValue = 'first value';

  counter = 0;

  @ViewChild('fileInput2') fileInput2: any;
  @ViewChild('textTag') textTag: any;

  constructor() {
    console.log('AppComponent constructor', this.textTag);
  }

  ngOnInit() {
    console.log('AppComponent ngOnInit', this.textTag);
  }

  ngAfterViewInit() {
    console.log('AppComponent ngAfterViewInit', this.textTag);
  }

  onClick(event: MouseEvent) {
    console.log('Clicked', event);
    this.counter++;
  }

  onChnageValue(value: string) {
    console.log('Changed', value);
    this.formValue = value;
  }

  onCall(value: string) {
    console.log('Called', value);
  }

  onFileChoose($event: any) {
    console.log('File chosen', $event);
  }

  onFileUploadCliked() {
    console.log('File upload clicked');
    console.log('File input', this.fileInput2);
    this.fileInput2.nativeElement.click();
  }
}
