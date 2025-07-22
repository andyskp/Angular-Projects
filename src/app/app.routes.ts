import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/counter/counter-page.component';
import { HeroPageComponent } from './Pages/hero/hero-page.component';
import {  DragonballPageComponent } from './Pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './Pages/dragonball-super/dragonball-super-page.component';

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
      {
            path: 'dragonball-super',
            component: DragonballSuperPageComponent
      },
      //? En caso de que falle vuelve al path vacio
      {
            path:'**',
             redirectTo: ''
      }
];
