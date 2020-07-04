import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UyekayitComponent } from './uyekayit/uyekayit.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { KisikayitComponent } from './kisikayit/kisikayit.component';

@NgModule({
  declarations: [
    AppComponent,
    UyekayitComponent,
    AddproductComponent,
    KisikayitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
