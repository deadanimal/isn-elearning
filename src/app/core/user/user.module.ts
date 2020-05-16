import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SurveyComponent } from './survey/survey.component';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { ExamOverviewComponent } from './exam-overview/exam-overview.component';
import { OnlineCourseDetailComponent } from './online-course-detail/online-course-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OnlineCoursesComponent,
    CalendarComponent,
    SurveyComponent,
    TrainingOverviewComponent,
    TrainingDetailComponent,
    ExamOverviewComponent, 
    OnlineCourseDetailComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes),
    AccordionModule.forRoot()
  ]
})
export class UserModule { }
