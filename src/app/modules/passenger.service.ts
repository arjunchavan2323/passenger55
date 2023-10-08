import { Injectable } from '@angular/core';
import { ipassenger } from './model';
import { SnackbarService } from '../snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private _snackbar:SnackbarService) { }
  passengerArray:Array<ipassenger>=[{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
}, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
}, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
}, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
}, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
    }];


getreturn(){
  return this.passengerArray
}

getdelect(product:ipassenger){
let s1=this.passengerArray.findIndex(obj=>(obj.id===product.id))
this.passengerArray.splice(s1, 1)
this._snackbar.openSnackBar("this product is remove")
}

getupdate(id:number, fullname:string){
 this.passengerArray.forEach(obj=>{
  if(obj.id===id){
    obj.fullname=fullname
  }
  this._snackbar.openSnackBar("this product is updated")
 }) 
 
}
}
