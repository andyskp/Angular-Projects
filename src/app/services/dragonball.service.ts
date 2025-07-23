import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {
    //! Se concatena para mostrar los resultados
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);
 //? Effect para el localStorage - Se ejecuta automaticamente
 //! Usar solamenete para que ejecute una sola tarea
 saveToLocalStorage = effect(() => {
  localStorage.setItem('characters', JSON.stringify(this.characters()));
})


  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
    
}