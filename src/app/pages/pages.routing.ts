import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: Pages,
    canActivate: [],
    children: [
      { path: '', loadChildren: 'app/pages/temperature/temperature.module#TemperatureModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
