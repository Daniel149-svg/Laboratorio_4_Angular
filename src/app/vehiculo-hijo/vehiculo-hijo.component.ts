import { Component, Input } from '@angular/core';
import { CaracteristicasVehiculoComponent } from "../caracteristicas-vehiculo/caracteristicas-vehiculo.component";
import { vehiculo } from '../vehiculo.models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-vehiculo-hijo',
  standalone: true,
  imports: [CaracteristicasVehiculoComponent, CommonModule, RouterModule],
  providers: [LoginService],
  templateUrl: './vehiculo-hijo.component.html',
  styleUrl: './vehiculo-hijo.component.css'
})
export class VehiculoHijoComponent {

  @Input() vehiculoLista!: vehiculo;
  @Input() indice!: number; 
  @Input() vehiculos: any[] = [];
  array_caracteristicas = [''];



  agregar_caracteristica(caracteristica:string){
    this.array_caracteristicas.push(caracteristica);
  }
  

}
