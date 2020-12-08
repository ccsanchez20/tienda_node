import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor() { }

  hola() {
    console.log('Hola Mundo');
  }
}
