export class Pelicula {
 constructor(
     public titulo: string,
     public argumento: string,
     public fechaEstreno: string,
     public director: string,
     public duracion: number,
     public youtube: string,
     public genero: string,
     public pais: string
 ) {}
}