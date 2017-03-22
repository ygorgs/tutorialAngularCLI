import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url:string = "http://loiane.com";

  urlImagem:string = "http://lorempixel.com/400/200/sports/"

  conteudoAtual:string = "";

  conteudoSalvo:string = "";

  isMouseOver = false;

  nome:string = "";

  getValor(){
    return 1;
  }

  onClick(){
    alert("Botão clicado")
  }

  onKeyup(event:KeyboardEvent){
    console.log(event)
    this.conteudoAtual = (event.target).value;
  }

  onSave(valor:string){
    this.conteudoSalvo = valor;
  }

  onMouseSpan(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
