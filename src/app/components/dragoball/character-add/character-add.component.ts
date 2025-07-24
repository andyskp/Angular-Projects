import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  //! Ejemplo de output
  newCharacter = output<Character>();
  deleteCharacter = output<(id: number) => void>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      //*TODO Se agrega el id de forma aleatoria
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    //! Ejemplo de output emit() [para emitir informacion a otro componente]
    this.newCharacter.emit(newCharacter);
    //! Agregar un nuevo personaje usando Push()
    // this.characters().push(newCaractert);
    //? Se agrega un nuevo personaje usando Update con signals
    // this.characters.update((list) => [...list, newCharacter])
    this.resetFields();
  }
  deleteCharacterById(id: number) {
  }

  //? Metodod para reiniciar los inputs
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  
}
