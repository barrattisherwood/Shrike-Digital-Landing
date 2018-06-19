import { Directive, ElementRef } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appGetHeight]'
})
export class GetHeightDirective {
  @Output() elementHeight = new EventEmitter;
  constructor(private el:ElementRef) { }

  ngOnInit() {
    console.log('top header height =', this.el.nativeElement.offsetHeight);
    this.elementHeight.emit(this.el.nativeElement.offsetHeight);
  }  

}
