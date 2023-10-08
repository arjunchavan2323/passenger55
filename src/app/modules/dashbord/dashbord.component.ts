import { Component, OnInit } from '@angular/core';
import { ipassenger } from '../model';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
passengerArry:Array<ipassenger>=[]
ischeckin!:number
  constructor(private _passenger:PassengerService) { }

  ngOnInit(): void {
    this.passengerArry=this._passenger.getreturn()
    this.ischeckin=this._passenger.passengerArray.filter(obj=>(obj.checkedIn)).length
  }
  onnndd(pid:ipassenger){
    this.ischeckin=this._passenger.passengerArray.filter(obj=>(obj.checkedIn)).length
  }

}
