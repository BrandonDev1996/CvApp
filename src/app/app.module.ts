import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SobreMiComponent } from './home/seccion 2/sobre-mi.component';
import { PresentacionComponent } from './home/seccion 1/presentacion.component';
import { Seccion3Component } from './home/seccion 3/seccion3.component';
import { FooterComponent } from './home/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Seccion4Component } from './home/seccion4/seccion4.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    SobreMiComponent,
    Seccion3Component,
    FooterComponent,
    Seccion4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
