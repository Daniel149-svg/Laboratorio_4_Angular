import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';
import { VehiculosProyectoComponent } from './vehiculos-proyecto/vehiculos-proyecto.component';
import { ContactoVehiculoComponent } from './contacto-vehiculo/contacto-vehiculo.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { EliminarComponent } from './eliminar/eliminar.component';

export const routes: Routes = [
    {path: "", component: HomeComponentComponent},

    { path: 'actualiza/:id', component: ActualizarComponentComponent},
    { path: "vehiculos", component: VehiculosProyectoComponent},
    {path: "contactanos", component: ContactoVehiculoComponent},
    { path: 'eliminar/:id', component: EliminarComponent },
    {path: "**", component: ErrorComponentComponent},

];
