import { Directive,ElementRef, Renderer2, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appMousehover]'
})
export class MousehoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
  }
  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#FFD700');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
  }

}
