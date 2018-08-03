import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { parseIntAutoRadix } from '../../../node_modules/@angular/common/src/i18n/format_number';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  store;
  reactiveform: FormGroup




  formdata() {
    this.store = this.reactiveform.value;

    this.servicedata.setItem(this.store);
    this.routes.navigate(["/displayform"]);

  }
  pass = "password";
  showpassword() {
    this.pass = "password";
  }
  hidepassword() {
    this.pass = "text";
  }



  constructor(private servicedata: FormService, private routes: Router) {
    this.reactiveform = new FormGroup({

      firstname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*'),]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*'),]),
      emailid: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$')]),
      contactno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      confirmpassword: new FormControl('', [Validators.required,]),
      gender: new FormControl('', [Validators.required, Validators.pattern('[M/F/O/]*')]),
      empid: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), , Validators.pattern('[0-9].{3}')]),
    });
  }

  ngOnInit() {
    if(this.routes.url=='/editform')
    {
      var mydata=this.servicedata.getItem()
      this.reactiveform.patchValue({
        firstname:mydata.firstname,
        lastname:mydata.lastname,
        emailid:mydata.emailid,
        contactno:mydata.contactno,
        password:mydata.password,
        confirmpassword:mydata.confirmpassword,
        gender:mydata.gender,
        empid:mydata.empid
      })
    }
  }

}
