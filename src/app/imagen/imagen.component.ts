import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  bandera : boolean;

  people: any[];

  constructor() {

    this.bandera = false;

    this.people = [
                  {"name": "Douglas Page", "age": 35, "country": 'Bo'},
                  {"name": "Mcleod Mueller", "age": 32, "country": 'USA'},
                  {"name": "day Meyers", "age": 21, "country": 'Bo'},
                  {"name": "Michael Jackson", "age": 56, "country": 'USA'},
                  {"name": "Juan Peres", "age": 34, "country": 'Bo'}
                  ]; 
   }

  ngOnInit() {
  }
 
  cambiarEstado() {

  this.bandera = !this.bandera;
  }

}


