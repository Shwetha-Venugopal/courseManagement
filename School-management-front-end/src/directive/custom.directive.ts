import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(public el:ElementRef,public render:Renderer2) { }


  @HostListener('mouseover') onMouseOver(){
    console.log('heloo')
    this.render.setStyle(this.el.nativeElement,'color', 'blue')
  }

}
