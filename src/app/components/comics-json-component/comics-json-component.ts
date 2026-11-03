import { Component } from '@angular/core';
import { Comic } from '../../models/comics';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  arraycomics: Comic[] = [];
  
  async mostrarComics(): Promise<void> {
    let path = "documents/comics.json";
    let response = await fetch(path);
    let datos = await response.json();
    for(let elem of datos){
      let comic = new Comic(elem.titulo, elem.imagen, elem.descripcion);
      //guardamos cada comic en el array
      this.arraycomics.push(comic);
    }
  }
}
