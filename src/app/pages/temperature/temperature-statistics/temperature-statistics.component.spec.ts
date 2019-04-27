import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureStatisticsComponent } from './temperature-statistics.component';

describe('TemperatureStatisticsComponent', () => {
  let component: TemperatureStatisticsComponent;
  let fixture: ComponentFixture<TemperatureStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
