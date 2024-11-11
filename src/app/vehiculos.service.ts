    import { Injectable } from '@angular/core';
    import { ServicioVehiculoService } from './servicio-vehiculo.service';
    import { vehiculo } from './vehiculo.models';
    import { DataService } from './data.service';
    import { BehaviorSubject, Observable, tap } from 'rxjs';

    @Injectable({
      providedIn: 'root'
    })
    export class vehiculosService {

      private vehiculosSubject = new BehaviorSubject<vehiculo[]>([]);  
        vehiculos$ = this.vehiculosSubject.asObservable();

      vehiculos: vehiculo[]=[];

      encontar_vehiculo(indice: any): vehiculo {
        throw new Error('Method not implemented.');
      }
      eliminarVehiculo(vehiculoId: number) {
        throw new Error('Method not implemented.');
      }
      vehiculo: vehiculo[] = [];

      constructor(
        private servicioMensaje: ServicioVehiculoService,
        private dataService: DataService
      ) {}

      agregar_vehiculo_servicio(vehiculo: vehiculo): Observable<any> {
        this.servicioMensaje.muestra_mensaje('Nombre Ingresado: ' + vehiculo.marca);
        return this.dataService.agregarVehiculo(vehiculo).pipe(
          tap((respuesta) => {
            console.log('Vehiculo agregado:', respuesta);
            this.vehiculo.push(vehiculo);
          })
        );
      }

      eliminar_vehiculo_servicio(indice: number) {
        const vehiculoId = "eliminar"; 
        this.dataService.eliminarVehiculo(vehiculoId).subscribe(() => {
          this.vehiculo.splice(indice, 1);
          console.log(`Vehiculo en indice ${indice} eliminado.`);
        });
      }

      // metodo para cargar los vehículos desde Firebase

      cargarVehiculos() {  
        this.dataService.obtenerVehiculos().subscribe((vehiculos) => {  
          console.log('Vehículos desde Firebase:', vehiculos); 
          this.vehiculosSubject.next(vehiculos);  
        });  
      }

      actualizar_vehiculo(indice: number, vehiculo: vehiculo) {
        const vehiculoId = "actualizar"; 
        this.dataService.actualizarVehiculo(vehiculoId, vehiculo).subscribe(() => {
          console.log(`Vehiculo en indice ${indice} actualizado en Firebase.`);
          this.vehiculo[indice] = vehiculo;
        });
      }
    }