import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLiveComponent } from './training-live.component';

describe('TrainingLiveComponent', () => {
  let component: TrainingLiveComponent;
  let fixture: ComponentFixture<TrainingLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
