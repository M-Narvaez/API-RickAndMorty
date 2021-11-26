import { Component, OnInit } from '@angular/core';
import { Personaje } from '@app/shared/interfaces/personajes.interface';
import { PersonajeService } from '@app/shared/services/personaje.service';
import { take } from 'rxjs';
type RequestInfo={
  next: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personajes: Personaje[]= [];

  info:RequestInfo = {
    next: '',
  };

  private numPag = 1;
  private query: string | undefined;

  constructor(private personajeSvc: PersonajeService) { }

  ngOnInit(): void {
    this.getDatosDeServicio();
  }

  private getDatosDeServicio(): void{
    this.personajeSvc.buscarPersonajes(this.query, this.numPag)
    .pipe(take(1)).subscribe((res:any) => {
      
      if(res?.results?.length){
        const {info, results} = res;
        this.personajes = [...this.personajes, ...results];
        this.info = info;
      }else {
        this.personajes = [];
      }
      
    });

  }

}
