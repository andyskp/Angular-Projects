// import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragoball/character-list/character-list.component';
import { CharacterAddComponent } from "../../components/dragoball/character-add/character-add.component";

//? Interface para tipar el objeto
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
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

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
};

