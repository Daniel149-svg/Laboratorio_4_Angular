import { Component } from '@angular/core';
import { vehiculo } from '../vehiculo.models';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { vehiculosService } from '../vehiculos.service'
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-vehiculos-proyecto',
  standalone: true,
  imports: [FormsModule],
  providers: [Router],
  templateUrl: './vehiculos-proyecto.component.html',
  styleUrl: './vehiculos-proyecto.component.css'
})
export class VehiculosProyectoComponent {

  volverHome(){
    this.router.navigate(['/home']);
  

  }
  titulo = 'Agregar un nuevo Vehiculos';

  vehiculos!:vehiculo[];
 

  cuadroMarca: string = "";
  cuadroModelo: string = "";
  cuadroNmotor: string = "";
  cuadroColor: string = "";
  cuadroTrasmicion: string = "";
  cuadroAnio: number = 0;
  cuadroValor: number = 0;

  constructor(private router: Router, private vehiculosService:
    vehiculosService){    

  }
  ngOnInit(): void {
    this.vehiculos = this.vehiculosService.vehiculos;
  }

  guardar_vehiculo(){
    //if
    let miVehiculo = new vehiculo(this.cuadroModelo, this.cuadroMarca, this.cuadroNmotor, this.cuadroColor, this.cuadroTrasmicion, this.cuadroAnio, this.cuadroValor);

   this.vehiculosService.agregar_vehiculo_servicio(miVehiculo);

   this.router.navigate(['/home']);
   this.cuadroMarca = "";
   this.cuadroModelo = "";
   this.cuadroNmotor = "";
   this.cuadroColor = "";
   this.cuadroTrasmicion = "";
   this.cuadroAnio = 0;
   this.cuadroValor = 0;
  }



}
