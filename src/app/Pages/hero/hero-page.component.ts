import { Component, signal } from "@angular/core";


@Component({
      selector: 'app-hero-page',
      standalone: true,
      templateUrl: './hero-page.component.html',
      styleUrls: ['./hero-page.component.css']
})

export class HeroPageComponent {
     name = signal('Iron Man');
     age = signal(47);

     getHeroDescription() {
      return `${this.name()} - ${this.age()}`
     }

     changeHero() {
      this.name.set('Spiderman');
     }
     changeAge() {
      this.age.set(60);
     }
     resetForm() {
      this.name.set('Iron Man');
      this.age.set(47);
     }
}
