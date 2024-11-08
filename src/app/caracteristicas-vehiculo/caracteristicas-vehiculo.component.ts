import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioVehiculoService } from '../servicio-vehiculo.service';

@Component({
  selector: 'app-caracteristicas-vehiculo',
  standalone: true,
  imports: [],
  providers: [ServicioVehiculoService],
  templateUrl: './caracteristicas-vehiculo.component.html',
  styleUrl: './caracteristicas-vehiculo.component.css'
})
export class CaracteristicasVehiculoComponent {

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasVehiculo = new
  EventEmitter<string>();

  constructor(private miServicio: ServicioVehiculoService){}

  agregar_caracteristicas(value: string){
    //this.miServicio.muestra_mensaje("carateristica agregada: "+value);
    this.caracteristicasVehiculo.emit(value);
  }

}
