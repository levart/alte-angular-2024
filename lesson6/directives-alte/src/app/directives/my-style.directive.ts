import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyStyle]',
  standalone: true
})
export class MyStyleDirective {
  @Input()
  set appMyStyle(value: Object) {
    const styles = Object.entries(value)
    for (const [key, value] of styles) {
      this.renderer.setStyle(this.elementRef.nativeElement, key, value);
    }
  }
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

}
