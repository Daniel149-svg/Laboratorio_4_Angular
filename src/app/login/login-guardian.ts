import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardian implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(){
    
    // Si el usuario no esta logueado, redirige al login
    if (!this.loginService.estaLogueado()) {
      this.router.navigate(['/login']);
      return false;  // No permite el acceso
    } else {
      return true;
    }
    

    // Si el usuario esta logueado, permite el acceso
  }
}
