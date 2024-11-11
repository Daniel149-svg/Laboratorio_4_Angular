import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioVehiculoService } from '../servicio-vehiculo.service'; 
import { vehiculosService } from '../vehiculos.service'; 

import { vehiculo } from '../vehiculo.models';
import { VehiculoHijoComponent } from "../vehiculo-hijo/vehiculo-hijo.component";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, FormsModule, VehiculoHijoComponent],
  providers: [ServicioVehiculoService],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  titulo = 'Registro de Vehiculos';
  
  vehiculos!: vehiculo[];

  cuadroMarca: string = "";
  cuadroModelo: string = "";
  cuadroNmotor: string = "";
  cuadroColor: string = "";
  cuadroTrasmicion: string = "";
  cuadroAnio: number = 0;
  cuadroValor: number = 0;
  empleadosService: any;
  caracteristicasVehiculo: any;
  nuevaCaracteristica: any;


  constructor(private miServicio: ServicioVehiculoService, private vehiculosService: vehiculosService) { 
  }

  ngOnInit(): void {
    // this.vehiculos = this.vehiculosService.vehiculo;

    this.vehiculosService.cargarVehiculos(); // Cargar vehículos desde Firebase  
    this.vehiculosService.vehiculos$.subscribe((vehiculos) => {  
      console.log('Vehículos desde el servicio:', vehiculos); // Imprime el resultado  
      this.vehiculos = vehiculos; // Actualiza la lista de vehículos  
    });
    
  }

  guardar_vehiculo() {
    let miVehiculo = new vehiculo(
      this.cuadroMarca, 
      this.cuadroModelo, 
      this.cuadroNmotor, 
      this.cuadroColor, 
      this.cuadroTrasmicion, 
      this.cuadroAnio, 
      this.cuadroValor
    );
  
    this.vehiculosService.agregar_vehiculo_servicio(miVehiculo).subscribe(() => {
      // Volver a cargar la lista de vehículos después de agregar uno nuevo
      this.vehiculosService.cargarVehiculos();
    });
  
    // Limpiar los campos del formulario
    this.cuadroMarca = "";
    this.cuadroModelo = "";
    this.cuadroNmotor = "";
    this.cuadroColor = "";
    this.cuadroTrasmicion = "";
    this.cuadroAnio = 0;
    this.cuadroValor = 0;
  }
  

   // Función para actualizar un vehículo
   actualiza_vehiculo(index: number) {
    console.log(`Actualizar vehículo en índice: ${index}`);
    // Aquí puedes implementar la lógica para abrir el componente de actualización
  }

  // Función para eliminar un vehículo
  eliminar_vehiculo(index: number) {
    this.vehiculos.splice(index, 1);
    console.log(`Vehículo en índice ${index} eliminado.`);
  }
}