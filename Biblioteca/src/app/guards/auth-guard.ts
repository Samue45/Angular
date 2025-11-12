import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('user'); // Simulación del loggeo de un usuario
  
  if(user){
    return true; // Usuario si registrado
  }else{
    router.navigate(['/login']); // Usuario no registrado
    return false;
  }
};
