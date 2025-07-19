<<<<<<< HEAD
import { Component, signal } from '@angular/core';

interface Character {
  id:number;
  name: string;
  power: number;
}
=======
import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

//? Interface para tipar el objeto
interface Character {
  id:number;
  name:string;
  power:number;
};

>>>>>>> 53731e27b91c613a7a3be0baa47874e1728afcb7

@Component({
  selector: 'app-dragonball',
  imports: [
    // NgClass

  ],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
<<<<<<< HEAD
  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001 },
    { id: 2, name: "Vegeta", power: 8000 },
    { id: 3, name: "Piccolo", power: 3000 },
    { id: 4, name: "Trunks", power: 1000 },
  ]);
=======
  //! Se concatena para mostrar los resultados
    characters = signal<Character[]>([
      {id:1, name:"Goku", power:9001},
      {id:2, name:"Vegeta", power:7500},
      {id:3, name:"Piccolo", power:7000},
      {id:4, name:"Trunks", power:5000},
    ]);

    // powerClasses = computed(() => {
    //   return {
    //     'text-danger':true,
    //   }
    // })
>>>>>>> 53731e27b91c613a7a3be0baa47874e1728afcb7
}
