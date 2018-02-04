import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylistings',
  templateUrl: './mylistings.component.html',
  styleUrls: ['./mylistings.component.css']
})
export class MylistingsComponent implements OnInit {

  Name: string = "ABC";
  Title: string = "Welcome to IS";

  constructor() { }

  ngOnInit() {
  }

}
