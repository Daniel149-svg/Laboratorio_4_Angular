import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { vehiculo } from './vehiculo.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private url = 'https://daniel-trujillo-ing-default-rtdb.firebaseio.com/navidad.json';

  constructor(private http: HttpClient) {}

  // Método para agregar un nuevo vehículo
  agregarVehiculo(vehiculo: vehiculo): Observable<any> {
    return this.http.post(this.url, vehiculo);
  }


  // Método para obtener todos los vehículos
  obtenerVehiculos(): Observable<vehiculo[]> {
    return this.http.get<vehiculo[]>(this.url);
  }

  // Método para actualizar un vehículo
  actualizarVehiculo(id: string, vehiculo: vehiculo): Observable<any> {
    return this.http.put(`${this.url}/${id}.json`, vehiculo);
  }

  // Método para eliminar un vehículo
  eliminarVehiculo(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}.json`);
  }
}
