// import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

//? Interface para tipar el objeto
interface Character {
  id:number;
  name:string;
  power:number;
};


@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  //*TODO: Agregar nuevo personaje con su poder usando signals
  name = signal('');
  power = signal(0);

  //! Se concatena para mostrar los resultados
    characters = signal<Character[]>([
      {id:1, name:"Goku", power:9001},
      {id:2, name:"Vegeta", power:8000},
    ]);

    //? Agregar un nuevo personaje
    addCharacter() {
      if (!this.name() || !this.power()  || this.power() <= 0) {
          return;
      }
      const newCharacter: Character = {
        id: this.characters().length + 1,
        name: this.name(),
        power: this.power()
      };
      this.characters.update((list) => [...list, newCharacter])
      this.resetFields();
    }
    
    //? Metodod para reiniciar los inputs
    resetFields() {
      this.name.set("");
      this.power.set(0);
    }
    deleteCharacter(id: number) {
      this.characters.update((list) => list.filter((character) => character.id !== id)); 
      confirm(`Quieres Eliminar a este personaje? ${id}`);
      alert("Eliminado");
    }
  }
  