import { Component } from '@angular/core';
import { FiltroLateralComponent } from '../filtro-lateral-component/filtro-lateral-component';
import { LibroListaComponent } from '../libro-lista-component/libro-lista-component';

@Component({
  selector: 'app-biblioteca-component',
  imports: [FiltroLateralComponent, LibroListaComponent],
  templateUrl: './biblioteca-component.html',
  styleUrl: './biblioteca-component.scss',
})
export class BibliotecaComponent {

}
