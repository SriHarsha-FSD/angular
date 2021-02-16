import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  textColor: string = "blue";
  value=6;
  anotherValue: number;
  status:string ="noterror";
  constructor() {
    this.anotherValue = (this.value==5) ? 10: 20
    console.log(this.anotherValue)
   }

  ngOnInit(): void {
  }

}
