import { Component } from '@angular/core';
import { LibrosService } from '../../core/libros-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-lateral-component',
  imports: [FormsModule],
  templateUrl: './filtro-lateral-component.html',
  styleUrl: './filtro-lateral-component.scss',
})
export class FiltroLateralComponent {

  filtroTitulo: string = '';

  constructor(private librosService: LibrosService) { }


  filtrarLibros(): void {
    this.librosService.getLibrosByName$(this.filtroTitulo);
  }

}
