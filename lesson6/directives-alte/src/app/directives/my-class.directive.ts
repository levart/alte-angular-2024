import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyClass]',
  standalone: true
})
export class MyClassDirective {
  @Input()
  set appMyClass(value: Object) {
    const classes = Object.entries(value)
    console.log(classes);
    for (const [className, condition] of classes) {
      if (condition) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
      }
    }
  }
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

}
