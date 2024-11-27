import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioVehiculoService } from '../servicio-vehiculo.service'; 
import { vehiculosService } from '../vehiculos.service'; 
import Swal from 'sweetalert2';

import { vehiculo } from '../vehiculo.models';
import { VehiculoHijoComponent } from "../vehiculo-hijo/vehiculo-hijo.component";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, FormsModule, VehiculoHijoComponent],
  providers: [ServicioVehiculoService, LoginComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit{

  titulo = 'Registro de Vehiculos';
  
  vehiculos!:vehiculo[];

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
    this.vehiculosService.obtener_vehiculo().subscribe(
        misVehiculos => {
            if (misVehiculos) 
                console.log(misVehiculos);
                this.vehiculos = Object.values(misVehiculos);
                this.vehiculosService.set_vehiculo(this.vehiculos);
            
        },
       
    );
}

  guardar_vehiculo(){
    let miVehiculo = new vehiculo(this.cuadroMarca, this.cuadroModelo, this.cuadroNmotor, this.cuadroColor, this.cuadroTrasmicion, this.cuadroAnio, this.cuadroValor);

    this.vehiculosService.agregar_vehiculo_servicio(miVehiculo);

    this.cuadroMarca = "";
    this.cuadroModelo = "";
    this.cuadroNmotor = "";
    this.cuadroColor = "";
    this.cuadroTrasmicion = "";
    this.cuadroAnio = 0;
    this.cuadroValor = 0;
  } 
}