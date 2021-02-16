import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  title:string = 'Built-in Pipes';
  toDate:Date = new Date();

  titleCase:string = "Uppercase and lowercase pipes";
  message: string = "Welcome to Angular";

  titleSlice: string = "slice pipe";
  messageSlice:string = "This is a slice pipe and will be sliced";

  titleDecimal: string = "Decimal Pipe";
  decValue: number = 98765.124994;

  indianCurrency:number = 1234;

  constructor() { }

  ngOnInit(): void {
  }

}
