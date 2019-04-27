import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TemperatureComponent } from './temperature.component';

// import { ClientSummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  {
    path: '',
    component: TemperatureComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
