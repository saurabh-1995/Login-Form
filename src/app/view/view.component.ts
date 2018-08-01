import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  viewdata;

  constructor(private routes:Router) { 
    this.viewdata = JSON.parse(localStorage.getItem("database"));
    
  }
  editdata() {
    this.routes.navigate(["/editform"])
  }
  ngOnInit() {
  }
  

}
