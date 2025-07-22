import { Component,  signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
})
export class DragonballCharacterAddComponent {
  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    console.log({ newCharacter });

    //! Agregar un nuevo personaje usando Push()
    // this.characters().push(newCaractert);
    //? Se agrega un nuevo personaje usando Update con signals
    // this.characters.update((list) => [...list, newCharacter])
    // this.resetFields();
  }

  //? Metodod para reiniciar los inputs
  resetFields() {
    this.name.set('');
    this.power.set(0);
  } 
}
