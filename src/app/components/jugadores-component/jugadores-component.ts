import { ChangeDetectorRef, Component } from '@angular/core';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  styleUrl: './jugadores-component.css',
  templateUrl: './jugadores-component.html',
})
export class JugadoresComponent {
  arrayjugadores: Jugador[] = [];

  constructor(
    private _cdr: ChangeDetectorRef
  ) {}

  async mostrarJugadores(): Promise<void> {
    let path = "documents/jugadores.json";
    let response = await fetch(path);
    let datos = await response.json();
    for(let elem of datos){
      let jugador = new Jugador(elem.jugador, elem.imagen);
        this.arrayjugadores.push(jugador);
  }
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    await this.mostrarJugadores();

  }

}

