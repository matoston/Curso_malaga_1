import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamiento',
  templateUrl: './pensamiento.component.html',
  styleUrls: ['./pensamiento.component.css']
})
export class PensamientoComponent implements OnInit {
 public  aIdeas: Array<string>;
 public idea: string;

  constructor() { }

  ngOnInit() {
    this.aIdeas = [];
   
  }

  btnAnadir() {
    this.aIdeas.push(this.idea)
   
  }

  btnBorrar(oEv) {
    this.aIdeas = [];
  }
}
