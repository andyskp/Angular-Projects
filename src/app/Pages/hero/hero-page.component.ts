import { Component, signal } from "@angular/core";


@Component({
      selector: 'app-hero-page',
      standalone: true,
      templateUrl: './hero-page.component.html',
      styleUrls: ['./hero-page.component.css']
})

export class HeroPageComponent {
      //? Se Dejan los valores por defecto de los Signals
     name = signal('Iron Man');
     age = signal(47);
      //! Se concatena para mostrar los resultados
     getHeroDescription() {
      return `${this.name()} - ${this.age()}`
     }
     //*TODO: Cambia el nombre de (name)
     changeHero() {
      this.name.set('Spiderman');
     }
     //*TODO: Cambia el nombre de (age)
     changeAge() {
      this.age.set(60);
     }
     //*TODO: Realiza un reset de los datos de la signals
     resetForm() {
      this.name.set('Iron Man');
      this.age.set(47);
     }
}
