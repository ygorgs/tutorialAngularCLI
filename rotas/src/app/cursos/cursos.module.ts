import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from "app/cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "app/cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosService } from "app/cursos/cursos.service";
import { CursosRoutingModule } from "app/cursos/cursos.routing.module";

@NgModule({
    declarations: [ 
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    imports: [ 
        CommonModule,
        CursosRoutingModule
     ],
    exports: [ ],
    providers: [ CursosService ]
})

export class CursosModule {}