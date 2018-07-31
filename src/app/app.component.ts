import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  reactiveform:FormGroup
  constructor(){
  this.reactiveform= new FormGroup({

    firstname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*'),]),
    lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*'),]),
    emailid :new FormControl('',[Validators.required,Validators.email]),
    contactno : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
    password :new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
    confirmpassword : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
    gender : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    empid : new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),,Validators.pattern('[0-9]*')]),
    });
}
}
