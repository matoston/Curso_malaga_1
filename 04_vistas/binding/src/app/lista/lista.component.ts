import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  aNombres: Array<string>;


  constructor() { }

  ngOnInit() {
    this.aNombres = ['Mig', 'Pepe', 'Juan', 'Maria'];
  }

}
