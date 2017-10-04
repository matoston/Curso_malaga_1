import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ImpresoraComponent } from './impresora/impresora.component';
import { AppPieComponent } from './app-pie/app-pie.component';
import { ImpresorabComponent } from './impresorab/impresora.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpresoraComponent,
    ImpresorabComponent,
    AppPieComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
