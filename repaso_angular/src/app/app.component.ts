import { MiServicioService } from './mi-servicio.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  mostrar = false;
  lista = ['Home', 'Menú 1', 'Menú 2'];
  constructor(private servicio: MiServicioService){
    this.servicio.hola();
  }
}

