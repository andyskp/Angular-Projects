import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//! Funcion para cargar los personajes con el localstorage al actualizar
const loadFromLocalStorage = (): Character[] => {
  //? Recuperar los personajes en el local Storage
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};
@Injectable({ providedIn: 'root' })
export class DragonballService {
  //! Se concatena para mostrar los resultados
  //? Se llama la fucnion del local storage - funcion ya que los inputs se encargan de compartir esa informacion
  characters = signal<Character[]>(loadFromLocalStorage());
  //? Effect para el localStorage - Se ejecuta automaticamente
  //! Usar solamenete para que ejecute una sola tarea
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
