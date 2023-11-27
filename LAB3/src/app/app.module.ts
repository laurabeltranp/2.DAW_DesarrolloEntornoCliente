import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperacionComponent } from './operacion/operacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OperacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//Este modulo debemos de importarlo para hacer Two Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
