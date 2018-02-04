import { Component, OnInit } from '@angular/core';
import {cribs} from './../Data/cribs';

@Component({
  selector: 'app-cribslisting',
  templateUrl: './cribslisting.component.html',
  styleUrls: ['./cribslisting.component.css']
})
export class CribslistingComponent implements OnInit {
cribs: Array<any> = cribs;
  constructor() { }

  ngOnInit() {
  }

}
