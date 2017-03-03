/**
 *
 */
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroComponent } from './hero/hero.component';

export const ROUTES: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'hero',
  component: HeroComponent
}, {
  path: 'detail/:id',
  component: HeroDetailComponent
}];
