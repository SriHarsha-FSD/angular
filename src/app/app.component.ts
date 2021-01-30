import { Component } from '@angular/core';

@Component({
  selector: 'sree-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mr. ';
  fName = 'Sri';
  lName = 'T';
  fullName = 'Sri Harsha';
  text ='Welcome to Angular';
  isDisabled = true;
  url="https://cli.angular.io/";
  target="_blank"
  counter=0;
  email="Sree@sree.com"

  constructor(){
    console.log(this.fullName)
  
  }
            
  getName(){
    console.log(this.fullName)

    console.log(this.fullName)
  }

  clickMe(){
    this.counter ++;
  }

  getEmail(){
    this.email
  }

  
}
