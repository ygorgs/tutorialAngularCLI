import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'O Hobbit',
    rating: 4.8213,
    numeroPaginas: 282,
    preco: 23.94,
    dataLancamento: new Date(2015, 8, 15),
    url: 'http://a.co/da1Vm15'
  };

  constructor() { }

  ngOnInit() {
  }

}
