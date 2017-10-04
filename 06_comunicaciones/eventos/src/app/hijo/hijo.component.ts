
import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input()
  usuario: string;

  @Output()
  borrar:  EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }
  btnBorrar () {
    this.borrar.emit();
  }
}
