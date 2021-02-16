import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective implements OnInit {

  @Input('first') emoji1: string = "";
  @Input('second') emoji2: string = "";
  @Input('third') emoji3: string = "";
  
  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color ="Blue"
    
  }

  ngOnInit(){
    this.el.nativeElement.textContent= this.el.nativeElement.textContent + this.emoji1 + "😀" + this.emoji2 + " " + this.emoji3
  }
}
