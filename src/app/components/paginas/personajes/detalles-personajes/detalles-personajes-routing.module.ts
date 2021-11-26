import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPersonajesComponent } from './detalles-personajes.component';

const routes: Routes = [{ path: '', component: DetallesPersonajesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesPersonajesRoutingModule { }
