import { Component, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() idTootip: string;

  @Output() clickOutside = new EventEmitter<MouseEvent>();

  message: string;

  key: string;

  currentElement = '';

  isOpenHint: boolean;

  isDynamic = true;

  onClick: EventEmitter<any> = new EventEmitter();

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    if (this.key === 'Escape') { 
      this.message = ''; 
    }
  }

  @HostListener('document:click', ['$event', '$event.target'])
  onClickOutside(event: MouseEvent, targetElement: HTMLButtonElement): void {
      if (!(targetElement instanceof HTMLButtonElement)) {
        this.message = '';
      }
  }

  onFocus($event) {
    this.currentElement = $event.target;
    this.toggleHint();
  }

  toggleHint() {
    this.isOpenHint = !this.isOpenHint;
  }

  onClickButtonA($event) {
    this.currentElement = $event.target;
    this.message = 'some msg Button A';
    this.toggleHint();
  }

  onClickButtonB($event) {
    this.currentElement = $event.target;
    this.message = 'some msg Button B';
    this.toggleHint();
  }
}
