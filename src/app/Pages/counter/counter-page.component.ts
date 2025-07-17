import { Component } from "@angular/core";


@Component({
  templateUrl: './counter-page.component.html',
  styles: `
  button {
    justify-content: center;
    padding: 10px;
    margin: 5px 10px;
  }
  `
})


export class CounterPageComponent {
  couter:number = 0;

  increaseBy( value:number) {
    this.couter += value;
  }
  decrementBy(value:number) :void {
    this.couter -= value
  }

  resetCounter():void {
    this.couter = 0;
  }
}