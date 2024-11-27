import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    token: string = ""; 

    constructor(private router: Router, private cookies: CookieService) {}

    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                firebase.auth().currentUser?.getIdToken()
                    .then(token => {
                        this.token = token;
                        this.cookies.set('token', this.token);  // Guardamos el token en cookies
                        this.router.navigate(['/home']);  // Redirigir a la página de inicio
                    });
            }, error => {
                console.log(error);
            });
    }

    getIdToken() {
        return this.cookies.get('token');  // Obtener el token de las cookies
    }

    estaLogueado() {
        return this.cookies.get('token');  // Si el token existe, el usuario está logueado
    }

    logout() {
        firebase.auth().signOut().then(() => {
            this.token = "";
            //this.cookies.delete('token');  // Eliminar el token de las cookies
            this.router.navigate(['/login']);  // Redirigir al login
        });
    }
}
