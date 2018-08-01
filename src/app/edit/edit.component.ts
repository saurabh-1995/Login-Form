import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from '../../../node_modules/rxjs';
import { FormService } from '../form.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  store;
  reactiveform:FormGroup
  
  formdata(){
    this.store=this.reactiveform.value;
    this.servicedata.setItem(this.store);
    this.routes.navigate(["/displayform"]);
  }
  password_verify() {
    if(this.reactiveform.value.password !== this.reactiveform.value.confirmpassword)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  constructor(private servicedata :FormService , private routes:Router) {
    this.reactiveform= new FormGroup({

      firstname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*'),]),
      lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*'),]),
      emailid :new FormControl('',[Validators.required,Validators.email]),
      contactno : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password :new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
      confirmpassword : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]),
      gender : new FormControl('',[Validators.required,Validators.pattern('[M/F/O]*')]),
      empid : new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),,Validators.pattern('[0-9].{3}')]),
      });
   }

  ngOnInit() {
  }

}
