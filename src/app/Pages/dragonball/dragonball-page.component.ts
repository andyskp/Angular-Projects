// import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

//? Interface para tipar el objeto
interface Character {
  id:number;
  name:string;
  power:number;
};


@Component({
  selector: 'app-dragonball',
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  //! Se concatena para mostrar los resultados
    characters = signal<Character[]>([
      {id:1, name:"Goku", power:9001},
      {id:2, name:"Vegeta", power:9000},
      {id:3, name:"Piccolo", power:7000},
      {id:4, name:"Trunks", power:5000},
    ]);

    // powerClasses = computed(() => {
    //   return {
    //     'text-danger':true,
    //     'text-medium-og':true
    //   }
    // })
}
