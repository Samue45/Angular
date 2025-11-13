import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
//Importaciones necesarias para poder crear un servicio basado en Observable
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {

  //Instancia de la clase Subject
  // Sólo el servicio debe tener acceso a esta propiedad
  private libros$ = new Subject<Libro[]>();
  
  //Simulación de una base de datos llena de libros
  private libros: Libro[];

  constructor() {
    this.libros = [
      {
        isbn: '978-84-376-0494-7',
        titulo: 'Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        fechaPrestamo: new Date('2025-11-01'),
      },
      {
        isbn: '978-84-204-8305-3',
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        fechaPrestamo: new Date('2025-10-15'),
      },
      {
        isbn: '978-84-663-4502-3',
        titulo: 'La sombra del viento',
        autor: 'Carlos Ruiz Zafón',
        fechaPrestamo: new Date('2025-09-20'),
      },
      {
        isbn: '978-84-339-7883-0',
        titulo: '1984',
        autor: 'George Orwell',
        fechaPrestamo: new Date('2025-11-05'),
      },
      {
        isbn: '978-84-376-0547-9',
        titulo: 'El Principito',
        autor: 'Antoine de Saint-Exupéry',
        fechaPrestamo: new Date('2025-10-30'),
      },
      {
        isbn: '978-84-08-09424-1',
        titulo: 'Los pilares de la Tierra',
        autor: 'Ken Follett',
        fechaPrestamo: new Date('2025-09-10'),
      },
      {
        isbn: '978-84-204-7673-4',
        titulo: 'El nombre del viento',
        autor: 'Patrick Rothfuss',
        fechaPrestamo: new Date('2025-11-12'),
      },
      {
        isbn: '978-84-9759-119-8',
        titulo: 'Crónica de una muerte anunciada',
        autor: 'Gabriel García Márquez',
        fechaPrestamo: new Date('2025-10-01'),
      },
      {
        isbn: '978-84-376-2590-0',
        titulo: 'Fahrenheit 451',
        autor: 'Ray Bradbury',
        fechaPrestamo: new Date('2025-11-02'),
      },
      {
        isbn: '978-84-264-0327-1',
        titulo: 'Orgullo y prejuicio',
        autor: 'Jane Austen',
        fechaPrestamo: new Date('2025-10-20'),
      },
      {
        isbn: '978-84-663-2084-6',
        titulo: 'La casa de los espíritus',
        autor: 'Isabel Allende',
        fechaPrestamo: new Date('2025-09-25'),
      },
      {
        isbn: '978-84-9759-235-5',
        titulo: 'El alquimista',
        autor: 'Paulo Coelho',
        fechaPrestamo: new Date('2025-11-08'),
      },
      {
        isbn: '978-84-376-2523-8',
        titulo: 'Rebelión en la granja',
        autor: 'George Orwell',
        fechaPrestamo: new Date('2025-10-05'),
      },
      {
        isbn: '978-84-204-8773-0',
        titulo: 'It',
        autor: 'Stephen King',
        fechaPrestamo: new Date('2025-11-10'),
      },
      {
        isbn: '978-84-08-16574-3',
        titulo: 'Sapiens: De animales a dioses',
        autor: 'Yuval Noah Harari',
        fechaPrestamo: new Date('2025-09-18'),
      },
    ];
  }

  //Método para actulizar la lista de libros y actulizar los datos del observable
  agregarLibro(libro : Libro){
    //Añadimos el libro a la lista
    this.libros.push(libro);
    //Actulizamos los datos que contiene el observable pasandole la lista de libros con el nuevo dato
    this.libros$.next(this.libros);
  }

  //Método que ofrece el Observable al cual los componentes se pueden suscribir para
  //estar al tanto de si ha habido algún cambio
  getLibros$(): Observable<Libro[]>{
    //Se devuelve el objeto Subject como Observable
    return this.libros$.asObservable();
  }
}
