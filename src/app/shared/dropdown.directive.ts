import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(private componentRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  toggleOpen(event: Event) {
    this.componentRef.nativeElement.contains(event.target)
      ? (this.isOpen = !this.isOpen)
      : (this.isOpen = false);
  }
}
