import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Personaje } from '@shared/interfaces/personajes.interface';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) { }

  buscarPersonajes(query = '', page = 1){
    return this.http.get<Personaje[]>(`${environment.baseUrlApi}/?name=${query}&page=${page}`);
  }

  getDetalles(id: number){
    return this.http.get<Personaje>(`${environment.baseUrlApi}/${id}`);
  }
}
