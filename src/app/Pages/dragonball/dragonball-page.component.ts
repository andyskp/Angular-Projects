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
  //*TODO: Agregar nuevo personaje con su poder usando signals
  name = signal('Gohan');
  power = signal(100);

  //! Se concatena para mostrar los resultados
    characters = signal<Character[]>([
      {id:1, name:"Goku", power:9001},
      {id:2, name:"Vegeta", power:9000},
      {id:3, name:"Piccolo", power:7000},
      {id:4, name:"Yamcha", power:500},
    ]);

    // powerClasses = computed(() => {
    //   return {
    //     'text-danger':true,
    //     'text-medium-og':true
    //   }
    // })

    //? Agregar un nuevo personaje
    addCharacter() {
      console.log(`${this.name()} - ${this.power()}`) 
    }
}
