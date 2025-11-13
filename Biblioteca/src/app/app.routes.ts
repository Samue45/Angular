import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home-component/home-component';
import { LoginComponent } from '../features/login-component/login-component';
import { authGuard } from './guards/auth-guard';
import { BibliotecaComponent } from '../features/biblioteca-component/biblioteca-component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirección
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[authGuard] },
  { path: 'biblioteca', component: BibliotecaComponent, canActivate:[authGuard] },
  { path: '**', redirectTo: '/home' } // ruta comodín
];


