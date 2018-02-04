import { Component, OnInit, Input } from '@angular/core';
import {Cribinterface} from "./../Cribinterface";
@Component({
  selector: 'app-crib',
  templateUrl: './crib.component.html',
  styleUrls: ['./crib.component.css']
})
export class CribComponent implements OnInit {
@Input("crib") crib: Cribinterface;

  constructor() { }

  ngOnInit() {
    
  }

}
