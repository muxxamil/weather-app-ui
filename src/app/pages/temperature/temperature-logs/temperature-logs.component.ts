import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import { TemperatureService } from '../../../services';
import { PAGINATION } from '../../../utils/defaults';

@Component({
  selector: 'app-temperature-logs',
  templateUrl: './temperature-logs.component.html',
  styleUrls: ['./temperature-logs.component.css']
})
export class TemperatureLogsComponent implements OnInit {

  @Input() temperatureLogData: any;
  @Output() paginationEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteLogEvent: EventEmitter<any> = new EventEmitter();
  public defaultLimit = PAGINATION.LIMIT;

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit() {
  }

  loadLogsLazy(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
    
    //imitate db connection over a network
    this.paginationEvent.emit({ page: (event.first + PAGINATION.LIMIT) / this.defaultLimit, limit: this.defaultLimit });
  }

  deleteLog(id) {
    this.deleteLogEvent.emit(id);
  }
}
