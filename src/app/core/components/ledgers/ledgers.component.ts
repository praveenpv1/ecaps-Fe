import { Component, OnInit } from '@angular/core';

export interface LedgerList {
  sNo:number;
  timeStamp:string;
  transType:string;
  prevBal:number;
  amount:number
  afterBal:number;
  opName:string;
  custNo:number;
}

@Component({
  selector: 'app-ledgers',
  templateUrl: './ledgers.component.html',
  styleUrls: ['./ledgers.component.scss']
})
export class LedgersComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }
}
