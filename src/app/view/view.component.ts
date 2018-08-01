import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  viewdata;

  constructor(private viewForm:FormService,private routes:Router) {
    this.viewdata=viewForm.getItem();

  }
  editdata() {
    this.routes.navigate(["/editform"]);
  }
  ngOnInit() {
  }
  

}
