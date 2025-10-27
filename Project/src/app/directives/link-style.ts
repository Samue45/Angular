import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLinkStyle]'
})
export class LinkStyle {

  @HostBinding('class.a-hover') appLinkStyle: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.appLinkStyle = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.appLinkStyle = false;
  }

}
