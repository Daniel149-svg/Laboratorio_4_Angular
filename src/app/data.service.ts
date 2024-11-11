      import { Injectable } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { vehiculo } from './vehiculo.models';
      import { map, Observable } from 'rxjs';

      @Injectable({
        providedIn: 'root',
      })

      export class DataService {
        private url = 'https://daniel-trujillo-ing-default-rtdb.firebaseio.com/navidad.json';
        httpClient: any;

        constructor(private http: HttpClient) {}

        // metodo para agregar un nuevo registro
        
        agregarVehiculo(vehiculo: vehiculo): Observable<any> {
          return this.http.post(this.url, vehiculo);
        }

        // metodo para obtener todos los vehiculo

        obtenerVehiculos(): Observable<vehiculo[]> {  
          return this.http.get<vehiculo[]>(this.url).pipe(  
            map((data) => Object.values(data))
          );  
        }

        // metodo para actualizar un vehiculo

        actualizarVehiculo(id: string, vehiculo: vehiculo): Observable<any> {
          return this.http.put(`${this.url}/${id}.json`, vehiculo);
        }

        // metodo para eliminar un vehiculo

        eliminarVehiculo(id: string): Observable<any> {
          return this.http.delete(`${this.url}/${id}.json`);
        }

      }