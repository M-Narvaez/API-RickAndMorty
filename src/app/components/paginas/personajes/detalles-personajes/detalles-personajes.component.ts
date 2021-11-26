import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '@app/shared/interfaces/personajes.interface';
import { PersonajeService } from '@app/shared/services/personaje.service';
import { Observable, take } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-personajes',
  templateUrl: './detalles-personajes.component.html',
  styleUrls: ['./detalles-personajes.component.css']
})
export class DetallesPersonajesComponent implements OnInit {

  personaje$: Observable<Personaje> | undefined;


  constructor(private route: ActivatedRoute, private personajeSvc: PersonajeService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.personaje$ = this.personajeSvc.getDetalles(id);
    });
  }

  onVolver(): void{
    this.location.back();
  }

}
