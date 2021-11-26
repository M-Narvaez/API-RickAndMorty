import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPersonajesComponent } from './components/paginas/personajes/detalles-personajes/detalles-personajes.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  
  { path: 'home', loadChildren: () => import('./components/paginas/home/home.module').then(m => m.HomeModule) }, 
  
  { path: 'lista-personajes', loadChildren: () => import('./components/paginas/personajes/lista-personajes/lista-personajes.module').then(m => m.ListaPersonajesModule) }, 
  
  { path: 'detalles-personaje/:id', loadChildren: () => import('./components/paginas/personajes/detalles-personajes/detalles-personajes.module').then(m => m.DetallesPersonajesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
