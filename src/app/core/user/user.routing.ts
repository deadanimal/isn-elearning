import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';
import { TrainingDetailsComponent } from '../admin/training-details/training-details.component';
import { ExamOverviewComponent } from './exam-overview/exam-overview.component';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { SurveyComponent } from './survey/survey.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OnlineCourseDetailComponent } from './online-course-detail/online-course-detail.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'training',
                children: [
                    {
                        path: 'overview',
                        component: TrainingOverviewComponent
                    },
                    {
                        path: 'detail',
                        component: TrainingDetailsComponent
                    }
                ]
            },
            {
                path: 'exam',
                children: [
                    {
                        path: 'overview',
                        component: ExamOverviewComponent
                    }
                ]
            },
            {
                path: 'online-courses',
                children: [
                    {
                        path: '',
                        component: OnlineCoursesComponent
                    },
                    {
                        path: 'details',
                        component: OnlineCourseDetailComponent
                    }
                ]
            },
            {
                path: 'survey',
                component: SurveyComponent
            },
            {
                path: 'calendar',
                component: CalendarComponent
            }
        ]
    }
]