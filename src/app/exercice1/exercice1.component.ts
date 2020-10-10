import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  myText: string = "Exemple proporty binding";

  constructor() { }

  binding = { 
    type:"Interpolation", 
  };

  ngOnInit(): void {
  }

  change(){

    console.log("test event binding");
    
  }

}
