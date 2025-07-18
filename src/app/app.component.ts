import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent], //*TODO: Agrega RouterOutlet
  templateUrl: './app.component.html', 
  standalone: true
})
export class AppComponent {
  name: string = 'Andres';
}