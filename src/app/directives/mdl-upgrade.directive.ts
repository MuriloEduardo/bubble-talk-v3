import {Directive, Input, ElementRef } from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[mdlUpgrade]'
})
export class MdlUpgradeDirective {
  @Input() mglUpgrade;

  constructor(el: ElementRef) {
  	console.log('mdlUpgrade upgrade')
    componentHandler.upgradeElement(el.nativeElement);
  }
}