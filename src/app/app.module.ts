import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './app/footer/footer.component';
import { MainComponent } from './app/main/main.component';
import { NavBarComponent } from './app/nav-bar/nav-bar.component';
import { ProductosComponent } from './app/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    NavBarComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
