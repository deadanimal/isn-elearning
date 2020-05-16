import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAttendancesComponent } from './training-attendances.component';

describe('TrainingAttendancesComponent', () => {
  let component: TrainingAttendancesComponent;
  let fixture: ComponentFixture<TrainingAttendancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAttendancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAttendancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
