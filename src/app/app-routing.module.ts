import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/paginas/home/home.component';
import { DetallesPersonajesComponent } from './components/paginas/personajes/detalles-personajes/detalles-personajes.component';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'detalle/:id',
    component:DetallesPersonajesComponent
  }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
