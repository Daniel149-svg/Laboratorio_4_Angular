import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioVehiculoService {

  constructor() { }

  muestra_mensaje(mensaje: string){
    alert(mensaje);
  }
}
