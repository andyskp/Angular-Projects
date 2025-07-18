import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/counter/counter-page.component';
import { HeroPageComponent } from './Pages/hero/hero-page.component';
import { DragonballComponent } from './Pages/dragonball/dragonball.component';

export const routes: Routes = [
      {
            path: '', 
            component: CounterPageComponent,
      },
      {
            path: 'hero',
             component: HeroPageComponent
      },
      {
            path: 'dragonball',
            component: DragonballComponent
      },
      //? En caso de que falle vuelve al path vacio
      {
            path:'**',
             redirectTo: ''
      }
];
