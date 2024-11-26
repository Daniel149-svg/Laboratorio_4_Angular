import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../vehiculo.models';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { vehiculosService } from '../vehiculos.service';



@Component({
  selector: 'app-actualizar-component',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './actualizar-component.component.html',
  styleUrl: './actualizar-component.component.css'
})

export class ActualizarComponentComponent implements OnInit {
  indice: any;
  accion!: number;

  volverHome(){
    this.router.navigate(['']);
  

  }
  titulo = 'Actualizar Vehiculo';

  vehiculos!: vehiculo[];

  cuadroMarca: string = "";
  cuadroModelo: string = "";
  cuadroNmotor: string = "";
  cuadroColor: string = "";
  cuadroTrasmicion: string = "";
  cuadroAnio: number = 0;
  cuadroValor: number = 0;
 

  constructor(private router: Router, private vehiculosService: vehiculosService, private route: ActivatedRoute){
    //this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.indice = this.route.snapshot.params['id'];
    let vehiculo: vehiculo = this.vehiculosService.encontar_vehiculo(this.indice);
    this.cuadroMarca = vehiculo.marca;
    this.cuadroModelo = vehiculo.modelo;
    this.cuadroNmotor= vehiculo.Nmotor;
    this.cuadroColor= vehiculo.color;
    this.cuadroTrasmicion= vehiculo.trasmicion;
    this.cuadroAnio = vehiculo.anio;
    this.cuadroValor = vehiculo.valor;
  }


  accion_vehiculo(){
    if(this.accion == 1){
      let miVehiculo = new vehiculo(this.cuadroMarca, this.cuadroModelo, this.cuadroNmotor, this.cuadroColor, this.cuadroTrasmicion, this.cuadroAnio, this.cuadroValor);
      this.vehiculosService.actualizar_vehiculo(this.indice, miVehiculo);
    }else{
      this.vehiculosService.eliminarVehiculo(this.indice);
    }

    setTimeout(() => {
      this.router.navigate(['']);
      
    }, 500);

  }
  
 }
