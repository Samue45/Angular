import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class Resaltar {

  // 1º Creamos las instancias para contener el elemento HTTML sobre el cual se aplica la directiva
  // y el renderer para modificar sus propiedades de forma segura
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // 2º Creamos los listeners para los eventos del ratón
  @HostListener('mouseenter')
  entrar() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightgreen');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
  }

  @HostListener('mouseleave')
  salir() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
  }

}
