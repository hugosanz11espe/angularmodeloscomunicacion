import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  arraynumeros: number[];
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  suma: number = 0


  constructor() {
    this.arraynumeros = [7,8,10,11,12,30]
  }

  sumarNumero(numero: number):void {
   this.suma += numero
  }

  crearNumero(): void {
    let numero = this.cajanumero.nativeElement.value;
    this.arraynumeros.push(numero);
  }
}
