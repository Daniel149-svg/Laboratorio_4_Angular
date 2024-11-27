import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';
import { VehiculosProyectoComponent } from './vehiculos-proyecto/vehiculos-proyecto.component';
import { ContactoVehiculoComponent } from './contacto-vehiculo/contacto-vehiculo.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian';


export const routes: Routes = [
   
  { path: 'home', component: HomeComponentComponent, canActivate: [LoginGuardian] },  
  { path: 'actualiza/:id', component: ActualizarComponentComponent, canActivate: [LoginGuardian] },  
  { path: 'vehiculos', component: VehiculosProyectoComponent, canActivate: [LoginGuardian] }, 
  { path: 'contactanos', component: ContactoVehiculoComponent },
  { path: 'eliminar/:id', component: EliminarComponent, canActivate: [LoginGuardian] }, 
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponentComponent },
];
