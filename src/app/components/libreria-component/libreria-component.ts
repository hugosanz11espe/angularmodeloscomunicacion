import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comics';

@Component({
  selector: 'app-libreria-component',
  standalone: false,
  styleUrl: './libreria-component.css',
  templateUrl: './libreria-component.html',
})
export class LibreriaComponent implements OnInit {
  arraycomics: Comic[] = [];
  constructor(
    private _cdr: ChangeDetectorRef
    ) {}

  async ngOnInit(): Promise<void> {
    let path = "documents/comics.json";
    let response = await fetch(path);
    let datos = await response.json();
    for(let elem of datos){
      let comic = new Comic(elem.titulo, elem.imagen, elem.descripcion);
      this.arraycomics.push(comic);
    }
    this._cdr.detectChanges();
  }
 
}
