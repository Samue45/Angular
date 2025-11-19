import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

  constructor(private router: Router){}

  gestionarLibros(){
    this.router.navigate(['biblioteca']);
  }
}
