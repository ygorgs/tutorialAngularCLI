import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { routing } from './app.routing';
import { CursosModule } from "app/cursos/cursos.module";
import { AppRoutingModule } from "app/app.routing.module";
import { AlunosModule } from "app/alunos/alunos.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule
    // routing
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
