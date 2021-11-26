import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesPersonajesComponent } from '@personajes/detalles-personajes/detalles-personajes.component';
import { ListaPersonajesComponent } from '@personajes/lista-personajes/lista-personajes.component';

import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    DetallesPersonajesComponent,
  ListaPersonajesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetallesPersonajesComponent,
  ListaPersonajesComponent
  ],
})
export class PersonajesModule { }
