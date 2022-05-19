import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './app/main/main.component';


import { ProductosComponent } from './app/productos/productos.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'productos', component: ProductosComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule],
})


export class AppRoutingModule {};



