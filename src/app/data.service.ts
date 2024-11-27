import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { vehiculo } from "./vehiculo.models";
import { LoginService } from "./login/login.service";

@Injectable({
    providedIn: 'root'
})
export class DataServices {
    private baseUrl = 'https://daniel-trujillo-ing-default-rtdb.firebaseio.com/navidad';

    constructor(private httpClient: HttpClient, private loginService: LoginService) {}

    guardar_arreglo(vehiculo: vehiculo[]) {
        // Corregir la URL eliminando el doble slash
        this.httpClient.put(`${this.baseUrl}.json`, vehiculo).subscribe(
            response => console.log("Se han guardado los cambios en firebase"),
            error => console.log('Error: ' + error)
        );
    }

    cargar_arreglo(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get(`${this.baseUrl}.json?auth=${token}`);
    }
    

    actualizar_posicion(indice: number, vehiculo: vehiculo) {
        const token = this.loginService.getIdToken();
        let url = `${this.baseUrl}/${indice}.json?auth=${token}`;
        return this.httpClient.put(url, vehiculo);
    }
    
    eliminar_posicion(indice: number) {
        const token = this.loginService.getIdToken();
        let url = `${this.baseUrl}/${indice}.json?auth=${token}`;
        return this.httpClient.delete(url);
    }
    
}