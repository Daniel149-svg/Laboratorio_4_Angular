import { Injectable } from '@angular/core';
import { ServicioVehiculoService } from './servicio-vehiculo.service';
import { vehiculo } from './vehiculo.models';


@Injectable({
  providedIn: 'root'
})

export class vehiculosService{

        vehiculo: vehiculo[]=[
          new vehiculo('Subaru', 'J10', 'M1000', 'Blanco', 'Standar', 1999, 3000),
          new vehiculo('Bugatti', 'Chiron', 'W16', 'Negro', 'Automático', 2021, 30000),
          new vehiculo('Ferrari', '488 Pista', 'F142M', 'Rojo', 'Standar', 2022, 30000),
          
        ];

        constructor(private servicioMensaje: ServicioVehiculoService){}

        agregar_vehiculo_servicio(vehiculo:vehiculo){
            this.servicioMensaje.muestra_mensaje("Nombre Ingresado: "
                + vehiculo.marca);
                
            this.vehiculo.push(vehiculo);
        }
        
        eliminar_vehiculo_servicio(indice: number) {
          if (indice > -1) {
            this.vehiculo.splice(indice, 1);
          }
        }

      
        encontar_vehiculo(indice: number){
          let vehiculo: vehiculo = this.vehiculo[indice];
          return vehiculo;
        }

        actualizar_vehiculo(indice: number, vehiculo:vehiculo){
          let vehiculoModificar = this.vehiculo[indice];
          vehiculoModificar.marca = vehiculo.marca;
          vehiculoModificar.modelo = vehiculo.modelo;
          vehiculoModificar.Nmotor = vehiculo.Nmotor;
          vehiculoModificar.color = vehiculo.color;
          vehiculoModificar.trasmicion = vehiculo.trasmicion;
          vehiculoModificar.anio = vehiculo.anio;
          vehiculoModificar.valor = vehiculo.valor;
        }

        eliminarVehiculo(indice: number): void {
          this.vehiculo.splice(indice, 1);
        }
      
        getVehiculos(): any[] {
          return this.vehiculo;
        }        
}