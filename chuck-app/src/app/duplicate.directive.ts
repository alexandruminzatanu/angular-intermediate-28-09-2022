import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDuplicate]'
})
export class DuplicateDirective {

  @Input() set appDuplicate(value: boolean[]){
    this.viewContainer.clear();

     this.viewContainer.createEmbeddedView(this.templateRef);
    if(value[1]){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    
  }


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
