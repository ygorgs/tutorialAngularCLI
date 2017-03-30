import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "app/guards/auth.guard";
import { CursosGuard } from "app/guards/cursos.guard";
import { AlunosGuard } from "app/guards/alunos.guard";

const appRoutes: Routes = [
    { path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alunos', 
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}