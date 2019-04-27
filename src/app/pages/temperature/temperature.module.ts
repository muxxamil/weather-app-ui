import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemperatureComponent } from './temperature.component';
import { routing } from './temperature.routing';
import { AddTemperatureComponent } from './add-temperature/add-temperature.component';
import { TemperatureStatisticsComponent } from './temperature-statistics/temperature-statistics.component';
import { TemperatureLogsComponent } from './temperature-logs/temperature-logs.component';
import { DataTableModule } from 'primeng/primeng';
import { TemperatureService } from '../../services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    DataTableModule
  ],
  declarations: [
    TemperatureComponent,
    AddTemperatureComponent,
    TemperatureStatisticsComponent,
    TemperatureLogsComponent,
  ],
  providers: [
    TemperatureService
  ]
})
export class TemperatureModule { }
