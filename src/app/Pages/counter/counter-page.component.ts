import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  couter: number = 1;
  //? Trabajar con señales  (Signals) se importa de angular Core
  counterSignel = signal(10);

  increaseBy(value: number) {
    this.couter += value;
    //! Se modifica el valor de la señal
    this.counterSignel.update((current) => current + value);
  }
  decrementBy(value: number): void {
    this.couter -= value;
    this.counterSignel.update((current) => current - value);
  }

  resetCounter(): void {
    this.couter = 0;
    this.counterSignel.set(0);
  }
}