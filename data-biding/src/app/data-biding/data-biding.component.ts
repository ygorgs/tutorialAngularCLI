import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url:string = "http://loiane.com";

  urlImagem:string = "http://lorempixel.com/400/200/sports/"

  getValor(){
    return 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
