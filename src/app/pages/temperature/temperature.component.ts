import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../../services';
import { PAGINATION } from '../../utils/defaults';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  public temperatureLogs = {};
  public temperatureStatistics = {};
  
  constructor(private temperatureService: TemperatureService) { }

  ngOnInit() {
    this.getTemperatureStatistics();
  }

  getTemperatureLogs(params = { limit: PAGINATION.LIMIT}) {
    this.temperatureService.getLogs(params).subscribe(res => {
      this.temperatureLogs = res;
    });
  }

  addTemperature(data) {
    this.temperatureService.addTemperature(data).subscribe(res => {
      this.temperatureLogs = res;
      this.getTemperatureStatistics();
      this.getTemperatureLogs();
    });
  }

  getTemperatureStatistics() {
    this.temperatureService.getTemperatureStatistics().subscribe(res => {
      this.temperatureStatistics = res;
    });
  }

  deleteTemperatureLog(id) {
    this.temperatureService.deleteTemperature(id).subscribe(res => {
      this.getTemperatureStatistics();
      this.getTemperatureLogs();
    });
  }

}
