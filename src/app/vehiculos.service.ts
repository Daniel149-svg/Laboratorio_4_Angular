import { Injectable } from '@angular/core';
import { ServicioVehiculoService } from './servicio-vehiculo.service';
import { vehiculo } from './vehiculo.models';
import { DataServices } from './data.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class vehiculosService {

  vehiculos: vehiculo[] = [];

  constructor(private servicioMensaje: ServicioVehiculoService, private dataService: DataServices) { }


  agregar_vehiculo_servicio(vehiculo: vehiculo): void {
    this.vehiculos.push(vehiculo);
    this.dataService.guardar_arreglo(this.vehiculos);

    // Mostrar SweetAlert de confirmación
    Swal.fire({
      icon: 'success',
      title: '¡Vehículo guardado!',
      text: `El vehículo de marca "${vehiculo.marca}" ha sido agregado correctamente.`,
      confirmButtonText: 'Aceptar'
    });
  }

  encontar_vehiculo(indice: number) {
    let vehiculo: vehiculo = this.vehiculos[indice];
    return vehiculo;
  }

  actualizar_vehiculo(indice: number, vehiculo: vehiculo): void {
    // Obtener el vehículo a modificar
    let vehiculoModificar = this.vehiculos[indice];

    // Actualizar las propiedades del vehículo
    vehiculoModificar.marca = vehiculo.marca;
    vehiculoModificar.modelo = vehiculo.modelo;
    vehiculoModificar.Nmotor = vehiculo.Nmotor;
    vehiculoModificar.color = vehiculo.color;
    vehiculoModificar.trasmicion = vehiculo.trasmicion;
    vehiculoModificar.anio = vehiculo.anio;
    vehiculoModificar.valor = vehiculo.valor;
    this.dataService.actualizar_posicion(indice, vehiculo);

    // Mostrar SweetAlert de confirmación
    Swal.fire({
      icon: 'success',
      title: '¡Vehículo actualizado!',
      text: `El vehículo de marca "${vehiculo.marca}" ha sido actualizado correctamente.`,
      confirmButtonText: 'Aceptar'
    });
  }

  eliminarVehiculo(indice: number): void {
    this.vehiculos.splice(indice, 1);
    this.dataService.eliminar_posicion(indice);
    this.dataService.guardar_arreglo(this.vehiculos);

    // Mostrar el mensaje SweetAlert
    Swal.fire({
      icon: 'success',
      title: '¡Vehículo eliminado!',
      text: 'El registro se ha eliminado correctamente.',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      // se actualizara la pagina despues de aceptar el eliminado
      window.location.reload(); // Recarga la página
    });

  }
  obtener_vehiculo() {
    return this.dataService.cargar_arreglo();
  }

  set_vehiculo(misVehiculos: vehiculo[]) {
    this.vehiculos = misVehiculos;
  }

}