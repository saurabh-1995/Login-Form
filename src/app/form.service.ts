import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  dataStored;

  constructor() { }
  setItem(dataReceive)
  {
    this.dataStored=dataReceive;
  }
  getItem()
  {
    return this.dataStored;
  }
}
