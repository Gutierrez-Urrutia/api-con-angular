import { Component, OnInit } from '@angular/core'; // Agregar OnInit
import { ApiServiceService } from './api-service.service'; // Importar el servicio


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  personajes: any[] = [];
  constructor(private readonly rickymortyService: ApiServiceService) {}
  //Observable frio: emite un solo valor, no varía en el tiempo
  ngOnInit(): void {
    this.rickymortyService.obtenerPersonajes().subscribe({
      next: (response) =>{
        console.log(response);
        this.personajes = response.results;
      },
      error: (err) =>{
        console.error(err);
      }
    });
  } //Crear el método ngOnInit

}
