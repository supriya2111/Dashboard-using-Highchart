import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuotaService } from 'src/app/Serivce/quota.service';
import { Quota } from 'src/app/interfaces/quota.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  singleUserQuota!: Quota;
  
  userList : Quota[] =[];
  userList$ =this.quotaService.userPerquota$

  reactiveForm!: FormGroup;
  formStatus: any;

  constructor(private fb:FormBuilder,
    private router: Router,
    private quotaService: QuotaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.reactiveForm=this.fb.group({
      username : ['',[Validators.required]]
    });

    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value);
      this.formStatus = value;
    });

    this.quotaService.userPerquota$.subscribe((data: any)=>{
      this.userList = data;
    })

  }

  getName():void{
    if(this.reactiveForm.valid){
      console.log(this.reactiveForm.value);

        this.quotaService.getName(this.reactiveForm.value).subscribe({
          next: (val: any) => {
            this.singleUserQuota=val;
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      
    }

  }
}
