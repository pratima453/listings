import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  Name: string = "pratima";
  Number: number = 453;
  Boolean: boolean = false;
  Data: Array<any>=[3,5,7,4,5,"abc"];
  constructor() { }

  ngOnInit() {
  }

}
