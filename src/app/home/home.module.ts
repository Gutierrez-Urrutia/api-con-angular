import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule //Importar el módulo HttpClientModule
  ],
  declarations: [HomePage],
  providers: [ApiServiceService] //Agregar el servicio al módulo
})
export class HomePageModule {}
