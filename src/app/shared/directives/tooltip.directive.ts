import {
  Directive, ElementRef, AfterViewInit, OnInit, AfterViewChecked, Input
} from '@angular/core';

@Directive({
  selector: '[appPositionTooltip]'
})
export class AppPositionTooltipDirective implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() hasDynamicArrow: boolean;

  @Input() currentElement;

  constructor(private element: ElementRef) { }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.hasDynamicArrow) {
      this.setPositionArrow(this.getCurrentElement());
    }
  }

  ngAfterViewChecked() {
    if (this.hasDynamicArrow) {
      this.setPositionArrow(this.getCurrentElement());
    }
  }

  getCurrentElement() {
    const parentElement = this.element.nativeElement.parentNode.parentNode;
    if (this.currentElement !== '' && this.currentElement !== undefined) {
      return this.currentElement;
    }

    return parentElement;
  }


  setPositionArrow(element) {
    const elementPosLeft = element.getBoundingClientRect();
    const parentElementPosLeft = element.parentNode.parentNode.parentNode.getBoundingClientRect();
    const posMiddleElement = elementPosLeft.width / 2;
    const posLeft = elementPosLeft.left - parentElementPosLeft.left;
    const currentPosition = posLeft + posMiddleElement;

    if (element !== '' && element !== undefined) {
      this.element.nativeElement.querySelector('.arrow').style.left = `${currentPosition}px`;
    }
  }

}
