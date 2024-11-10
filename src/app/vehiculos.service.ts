        import { Injectable } from '@angular/core';
        import { ServicioVehiculoService } from './servicio-vehiculo.service';
        import { vehiculo } from './vehiculo.models';
        import { DataService } from './data.service';

        @Injectable({
          providedIn: 'root'
        })
        export class vehiculosService {

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

          agregar_vehiculo_servicio(vehiculo: vehiculo) {
            this.servicioMensaje.muestra_mensaje('Nombre Ingresado: ' + vehiculo.marca);
            this.dataService.agregarVehiculo(vehiculo).subscribe((respuesta) => {
              console.log('Vehículo agregado:', respuesta);
              this.vehiculo.push(vehiculo);
            });
          }

          eliminar_vehiculo_servicio(indice: number) {
            const vehiculoId = "eliminar"; 
            this.dataService.eliminarVehiculo(vehiculoId).subscribe(() => {
              this.vehiculo.splice(indice, 1);
              console.log(`Vehículo en índice ${indice} eliminado.`);
            });
          }

          // Método para cargar los vehículos desde Firebase
          cargarVehiculos() {
            this.dataService.obtenerVehiculos().subscribe((vehiculos) => {
              this.vehiculo = vehiculos;
            });
          }

          actualizar_vehiculo(indice: number, vehiculo: vehiculo) {
            const vehiculoId = "actualizar"; 
            this.dataService.actualizarVehiculo(vehiculoId, vehiculo).subscribe(() => {
              console.log(`Vehículo en índice ${indice} actualizado en Firebase.`);
              this.vehiculo[indice] = vehiculo;
            });
          }
        }