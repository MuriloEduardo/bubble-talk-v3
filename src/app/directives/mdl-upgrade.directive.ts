import {Directive, Input, ElementRef } from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[mdlUpgrade]'
})
export class MdlUpgradeDirective {
  @Input() mglUpgrade;

  constructor(el: ElementRef) {
    componentHandler.upgradeElement(el.nativeElement);
  }
}