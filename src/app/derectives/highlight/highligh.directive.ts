import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighligh]'
})
export class HighlighDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2 
  ) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', '#3FC060');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '600');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', null);
  }
}