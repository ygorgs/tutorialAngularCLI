import { Injectable } from '@angular/core';
import { Aluno } from "app/alunos/aluno";

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number){
    let alunos = this.getAlunos();
    for (let i=0; i<alunos.length; i++){
      if(alunos[i].id == id){
        return alunos[i];
      }
    }
    return null;
  }

  constructor() { }

}
