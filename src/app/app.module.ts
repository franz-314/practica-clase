import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenComponent } from './imagen/imagen.component';
import { Practica3Directive } from './directivas/practica3.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImagenComponent,
    Practica3Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
