import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temperature-statistics',
  templateUrl: './temperature-statistics.component.html',
  styleUrls: ['./temperature-statistics.component.css']
})
export class TemperatureStatisticsComponent implements OnInit {

  @Input() temperatureStatistics: any;

  constructor() { }

  ngOnInit() {
  }

}
