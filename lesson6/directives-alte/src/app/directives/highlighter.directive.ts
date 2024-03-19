import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: true
})
export class HighlighterDirective implements OnInit{
  // elementRef: ElementRef;

  @Input() appHighlighter: string = 'yellow';
  @Input() color: string = 'black';
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // this.elementRef = elementRef;
  }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    // this.elementRef.nativeElement.style.marginBottom = '10px';
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.appHighlighter);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.elementRef.nativeElement, 'marginBottom', '10px');
  }

}
