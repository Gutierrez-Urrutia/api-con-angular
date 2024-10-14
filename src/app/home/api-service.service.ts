import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly url: string = 'https://rickandmortyapi.com/api';
  //Se inyecta la dependencia http, readonly es opcional
  constructor(private readonly http: HttpClient) {

  }

  obtenerPersonajes(): Observable<any> {
    //Se realiza la petición get a la API de Rick y Morty
    return this.http.get(this.url + '/character');
  }

  
}
