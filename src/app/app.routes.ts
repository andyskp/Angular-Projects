import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/counter/counter-page.component';
import { HeroPageComponent } from './Pages/hero/hero-page.component';
import {  DragonballPageComponent } from './Pages/dragonball/dragonball-page.component';

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
            component: DragonballPageComponent
      },
      //? En caso de que falle vuelve al path vacio
      {
            path:'**',
             redirectTo: ''
      }
];
