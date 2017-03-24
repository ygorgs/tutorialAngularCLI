import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngsyle',
  templateUrl: './diretiva-ngsyle.component.html',
  styleUrls: ['./diretiva-ngsyle.component.css']
})
export class DiretivaNgsyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  mudarAtivo(){
    this.ativo = !this.ativo;
  }

  constructor() { }

  ngOnInit() {
  }

}
