import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../../models/libro';
import { LibrosService } from '../../core/libros-service';
import { CommonModule } from '@angular/common';
import { FechaBonitaPipe } from '../../shared/pipes/fecha-bonita-pipe';


@Component({
  selector: 'app-libro-lista-component',
  imports: [CommonModule, FechaBonitaPipe],
  templateUrl: './libro-lista-component.html',
  styleUrl: './libro-lista-component.scss',
})
export class LibroListaComponent {

  //Propiedad para almacenar la lista de libros obtneida del servicio
  listaLibros: Libro[] = [];

  //Definimos la propieddad para guardar el Observable
  oversableLibros$!: Observable<Libro[]>;

  //Inyectamos el servicio de libros para poder suscribirnos al observable
  constructor (private librosService: LibrosService) {}

  //Usamos el ciclo de vida OnInit para inicializar la suscripción al observable
  ngOnInit(){
    //Llamamos al método del servicio que nos devuelve el observable
    this.oversableLibros$ = this.librosService.getLibros$();
    //Nos suscribimos al observable para recibir los datos
    this.oversableLibros$.subscribe({
      next: (libros: Libro[]) => {
         console.log("LIBROS RECIBIDOS", libros);
        this.listaLibros = libros;
      },
      error: (error) => {
        console.error('Error al obtener la lista de libros:', error);
      }
    });
  }



}

