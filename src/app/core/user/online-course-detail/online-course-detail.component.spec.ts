import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCourseDetailComponent } from './online-course-detail.component';

describe('OnlineCourseDetailComponent', () => {
  let component: OnlineCourseDetailComponent;
  let fixture: ComponentFixture<OnlineCourseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCourseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
