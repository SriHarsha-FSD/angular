import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList = [
    {
      name: "Sree",
      email: "Sree@gmail.com",
      skills:[
        {
        skill : 'progress',
        exp : '5 years' 
        }
      ]
    },
    {
      name: "sai",
      email: "Sai@gmail.com",
      skills:[
        {
        skill : 'jewellery',
        exp : '1 year' 
        }
      ]
    },
    {
      name: "Hanumanthu",
      email: "hanu@gmail.com",
      skills:[
        {
        skill : 'LVA',
        exp : '30 years' 
        }
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
