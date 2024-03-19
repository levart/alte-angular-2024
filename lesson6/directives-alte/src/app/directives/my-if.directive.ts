import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyIf]',
  standalone: true
})
export class MyIfDirective {
  show: boolean = true;
  @Input()
  set appMyIf(condition: boolean) {
    this.show = condition;
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  @Input()
  set appMyIfElse(elseTemplate: TemplateRef<any>) {
    if (!this.show) {
      this.viewContainerRef.createEmbeddedView(elseTemplate);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
