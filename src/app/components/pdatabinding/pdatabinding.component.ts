import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdatabinding',
  templateUrl: './pdatabinding.component.html',
  styleUrls: ['./pdatabinding.component.css']
})
export class PdatabindingComponent implements OnInit {
testvar = "i'm a test variable";

clickMe(){
 if( this.testvar === ""){
   this.testvar = "empty";
 }
}
  constructor() { }

  ngOnInit(): void {
  }

}
