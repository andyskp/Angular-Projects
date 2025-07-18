import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
  //? Es para no usar Zone.js en este componente.
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  couter: number = 1;
  //? Trabajar con señales  (Signals) se importa de angular Core
  counterSignel = signal(10);

  constructor (){
    // setInterval(() => {
    //   this.couter += 1;
    //   this.counterSignel.update((v) => v + 1);
    //   console.log("Tick");
      
    // },2000);
  }

  increaseBy(value: number) {
    this.couter += value;
    //! Se modifica el valor de la señal
    this.counterSignel.update(current => current + value);
  }
  decrementBy(value: number): void {
    this.couter -= value;
    //! Se modifica el valor de la señal
    this.counterSignel.update(current => current - value);
  }

  resetCounter(): void {
    this.couter = 0;
    //! Se utiliza para cambiar el valor de la señal
    this.counterSignel.set(0);
  }
}