import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidatorsService } from '../../../utils/cutom-validators';

@Component({
  selector: 'app-add-temperature',
  templateUrl: './add-temperature.component.html',
  styleUrls: ['./add-temperature.component.css']
})
export class AddTemperatureComponent implements OnInit {

  public addTemperatureForm: FormGroup;
  @Output() addTemperatureEvent: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addTemperatureForm = this.fb.group({
      temperature: ['', [CustomValidatorsService.isValidNumber(0.1)]]
    });
  }

  submitTemperature(data) {
    this.addTemperatureEvent.emit(data);
  }

}
