import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { vehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit{

  vehiculoId: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehiculoService : vehiculosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vehiculoId = +params['id'];
    });
  }

  eliminarVehiculo(): void {
    this.vehiculoService.eliminarVehiculo(this.vehiculoId);
    this.router.navigate(['/']); 
  }

  cancelar(): void {
    this.router.navigate(['/']); 
  }

}
