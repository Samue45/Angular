import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
    miFormulario: FormGroup;

    constructor(private router: Router){
      this.miFormulario = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{6,}$')
        ])
      });
    }

    send() {
      if(this.miFormulario.valid){
        //Simulación de un loggeo exitoso
        localStorage.setItem('user', 'true');
        // Permitimos acceso al home
        this.router.navigate(['/home']);
      }else{
        //Simulación de un loggeo no exitoso
        //El guard no permite pasar al home
         localStorage.removeItem('user');
      }
    }

}
