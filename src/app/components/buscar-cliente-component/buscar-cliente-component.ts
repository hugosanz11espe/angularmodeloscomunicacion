import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-buscar-cliente-component',
  standalone: false,
  styleUrl: './buscar-cliente-component.css',
  templateUrl: './buscar-cliente-component.html',
})
export class BuscarClienteComponent {
  idcliente: number | null = null;
  arrayclientes: Cliente[] = [];

  constructor(
    private _cdr: ChangeDetectorRef
  ) {}

  async mostrarCliente(): Promise<void> {
    this.arrayclientes = [];
    let path = "documents/clientesdatos.json";
    let response = await fetch(path);
    let datos = await response.json();
    for(let elem of datos){
      if(elem.idcliente === this.idcliente){
        let cliente = new Cliente(
          elem.idcliente,
          elem.nombre,
          elem.paginaweb,
          elem.imagencliente
        );
        this.arrayclientes.push(cliente);
      }
    }
    this._cdr.detectChanges();
  }
}
