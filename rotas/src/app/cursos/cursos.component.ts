import { Component, OnInit } from '@angular/core';
import { CursosService } from "app/cursos/cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];

  constructor(private cursosService: CursosService) { 
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
