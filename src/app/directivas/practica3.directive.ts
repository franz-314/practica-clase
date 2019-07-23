import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPractica3]'
})
export class Practica3Directive {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  publiconMouseEnter(){
    this.element.nativeElement.style.backgroundColor = "red";
  }

  @HostListener('mouseleave')
  publiconMouseLeave(){
    this.element.nativeElement.style.backgroundColor = "blue";
  }

}
