import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ipassenger } from '../model';
import { ParseSourceFile } from '@angular/compiler';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
@Input()product!:ipassenger
@Output()evenree:EventEmitter<ipassenger>=new EventEmitter<ipassenger>()
iseditable:boolean=false
  constructor(private _productser :PassengerService) { }

  ngOnInit(): void {
  }
  onremove(product:ipassenger){
    this.evenree.emit(product)
this._productser.getdelect(product)
  }

  onaddatom(fullname:string){
    this.iseditable=!this.iseditable
    this._productser.getupdate(this.product.id, fullname)
  }

}
