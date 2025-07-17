import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], //*TODO: Agrega RouterOutlet
  templateUrl: './app.component.html', 
  standalone: true
})
export class AppComponent {
  name: string = 'Andres';
}