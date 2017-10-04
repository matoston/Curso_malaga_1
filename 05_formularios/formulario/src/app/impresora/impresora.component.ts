import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface Provincia {
  idProvincia: number;
  nombre: string;
}

@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrls: ['./impresora.component.css']
})
export class ImpresoraComponent implements OnInit {
  aImpresoras: Array<string> ;
  aProvincias: Array<Provincia>;
  impresoraSeleccionada: string;
  provinciaSeleccionada: Provincia = {idProvincia: 0, nombre: ''};

  print: boolean ; // true si se selecciona imprime
  isClaro: boolean; // true si se selecciona claro
  mostrarFinal: boolean;
  user: string;
  privinciaSelect: boolean;
  avisarPrint = () => {
    console.log('Modificada la opción de imprimir con valor :' + this.print);
  }

  avisarProvincia = () => {
    this.mostrarFinal = true;
    console.log('Provincia Seleccionada');
   // console.dir(this.provinciaSeleccionada);
   this.privinciaSelect = true;
  }

  constructor() { }

  ngOnInit() {
    this.print = false;	// true si se selecciona imprime
    this.isClaro = false; // true si se selecciona claro
    this.aProvincias = [
      {idProvincia: 2, nombre: 'Málaga'},
      {idProvincia: 3, nombre: 'Madrid'},
     {idProvincia: 1, nombre: 'Barcelona' },
      {idProvincia: 7, nombre: 'Granada'},
      {idProvincia: 5, nombre: 'Lugo'}
      ];
    this.aImpresoras = ['HP',
    'Epson',
    'Lexmark',
    'Brother'];
    this.mostrarFinal = false;
    this.privinciaSelect = false;
  }

}
