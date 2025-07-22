// import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragoball/character-list/character-list.component';
import { DragonballCharacterAddComponent } from "../../components/dragonball-character-add/dragonball-character-add.component";

//? Interface para tipar el objeto
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
})
export class DragonballSuperPageComponent {
  //*TODO: Agregar nuevo personaje con su poder usando signals
  listName = '';
  name = input.required<string>();
  power = input.required<number>();

  //! Se concatena para mostrar los resultados
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  //? Agregar un nuevo personaje
  
    // this.characters.update((list) => [...list, newCharacter])
    // this.resetFields();
  }


  //? Metodod para reiniciar los inputs
  // resetFields() {
  //   this.name.set("");
  //   this.power.set(0);
  // }
  // deleteCharacter(id: number) {
  //   this.characters.update((list) =>
  //     list.filter((character) => character.id !== id)
  //   );
  //   confirm(`Quieres Eliminar a este personaje? ${id}`);
  //   alert('Eliminado');
  

