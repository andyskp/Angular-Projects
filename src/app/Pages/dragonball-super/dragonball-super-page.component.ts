// import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragoball/character-list/character-list.component';
import { CharacterAddComponent } from "../../components/dragoball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';
import { Character } from '../../interfaces/character.interface';

//? Interface para tipar el objeto

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  //*TODO: Agregar nuevo personaje con su poder usando signals
  // listName = '';
  characters = signal<Character[]>([
    { id: 12, name: 'Cell', power: 15000 },
  ]);
  //*TODO - Inyectar el servicio con el contructor
  // constructor(
  //   public dragonballService: DragonballService
  // ){}

  //? INYECTAR EL SERVICIO CON INJECT
  public dragonBallService = inject(DragonballService);
  
};


