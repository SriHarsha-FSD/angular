import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {

  firstName = "";
  lastName="";
  email="";
  mobileNo="";
  isDisabled=false;
  show=false;

  submitMe(){
    
    this.firstName;
    this.lastName ;
    this.email;
    this.mobileNo;
    this.isDisabled=true;
    this.show = true;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
