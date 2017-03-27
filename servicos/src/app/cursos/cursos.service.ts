import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'NodeJS'];

  constructor() {
     console.log('CursosService');
   }

   getCursos(){
     console.log('Obtendo lista de cursos');
     return this.cursos;
   }

   addCurso(curso:string){
     console.log(`Criando um novo curso ${curso}`);
     this.cursos.push(curso);
     this.emitirCursoCriado.emit(curso);
     CursosService.criouNovoCurso.emit(curso);
   }

}
