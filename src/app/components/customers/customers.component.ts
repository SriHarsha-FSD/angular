import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = [
    {id:1, name: 'Hanumanthu', email:'hanu@gmail.com'},
    {id:2, name: 'Shirisha', email:'siri@gmail.com'},
    {id:3, name: 'Sri Harsha', email:'sri@gmail.com'},
    {id:4, name: 'Sai Shashank', email:'sai@gmail.com'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
