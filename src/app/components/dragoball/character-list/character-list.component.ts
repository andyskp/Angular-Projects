import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragoball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  //? Se utiliza para recibir el valor de la señal
  characters = input.required<Character[]>(); 
  listName = input.required<string>();
}
