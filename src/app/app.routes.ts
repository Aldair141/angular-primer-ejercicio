import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EjercicioOneComponent } from './components/ejercicio-one/ejercicio-one.component';

const RUTAS: Routes = [
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'ejercicio-uno', pathMatch: 'full', component: EjercicioOneComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);