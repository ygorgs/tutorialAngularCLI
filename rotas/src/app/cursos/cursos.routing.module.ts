import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from 'app/cursos/cursos.component';
import { CursoDetalheComponent } from "app/cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "app/cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(cursosRoutes) ],
    exports: [ RouterModule ]
})

export class CursosRoutingModule {}