import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { vehiculo } from "./vehiculo.models";

@Injectable({
    providedIn: 'root'
})
export class DataServices {
    private baseUrl = 'https://daniel-trujillo-ing-default-rtdb.firebaseio.com/navidad';

    constructor(private httpClient: HttpClient) {}

    guardar_arreglo(vehiculo: vehiculo[]) {
        // Corregir la URL eliminando el doble slash
        this.httpClient.put(`${this.baseUrl}.json`, vehiculo).subscribe(
            response => console.log("Se han guardado los cambios en firebase"),
            error => console.log('Error: ' + error)
        );
    }

    cargar_arreglo() {
        // Corregir la URL eliminando el doble slash
        return this.httpClient.get(`${this.baseUrl}.json`);
    }

    actualizar_posicion(indice: number, vehiculo: vehiculo) {
        // Corregir la URL eliminando el doble slash
        let url = `${this.baseUrl}/${indice}.json`;

        this.httpClient.put(url, vehiculo).subscribe(
            response => console.log("Se ha actualizado el vehiculo " + response),
            error => console.log("Error: " + error)
        );
    }

    eliminar_posicion(indice: number) {
        // Corregir la URL eliminando el doble slash
        let url = `${this.baseUrl}/${indice}.json`;

        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado el vehiculo " + response),
            error => console.log("Error: " + error)
        );
    }
}
