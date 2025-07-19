import { Component, signal } from '@angular/core';

//? Interface para tipar el objeto
interface Character {
  id:number;
  name:string;
  power:number;
};


@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  //! Se concatena para mostrar los resultados
    characters = signal<Character[]>([
      {id:1, name:"Goku", power:9000},
      {id:2, name:"Vegeta", power:7500},
      {id:3, name:"Piccolo", power:7000},
      {id:4, name:"Trunks", power:5000},
    ]);
}
