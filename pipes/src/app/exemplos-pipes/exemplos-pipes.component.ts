import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

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

  livros = ["The Call of Cthulhu", "The Lord of the Rings"];

  filtro: string;

  addLivro(livro:string){
    this.livros.push(livro);
  }

  obterLivros(){
    if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === ''){
      return this.livros;
    }

     return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

}
