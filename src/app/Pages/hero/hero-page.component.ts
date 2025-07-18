import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
      selector: 'app-hero-page',
      standalone: true,
      templateUrl: './hero-page.component.html',
      imports: [UpperCasePipe], //! Pipes UpperCase en Angular
      // styleUrls: ['./hero-page.component.css']
})

export class HeroPageComponent {
      //? Se Dejan los valores por defecto de los Signals
     name = signal('Iron Man');
     age = signal(47);

      //* Signal computada: La importa de Angular core
      heroDescription = computed(() => {
            const description = `${this.name()} - ${this.age()}`;
            return description
      });

      //! Signal computada para capitalizar el nombre en mayúsculas
      capitalizedName = computed(() =>  this.name().toUpperCase());

      //! Se concatena para mostrar los resultados
//      getHeroDescription() {
//       return `${this.name()} - ${this.age()}`
//      }
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
