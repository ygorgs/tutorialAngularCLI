import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { InputPropertyComponent } from './data-biding/input-property.component';
import { OutputPropertyComponent } from './data-biding/output-property.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
