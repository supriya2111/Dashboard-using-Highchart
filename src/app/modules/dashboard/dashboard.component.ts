import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reactiveForm!: FormGroup;



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm=this.fb.group({
      
    })
  }

  getName(){

  }
}
