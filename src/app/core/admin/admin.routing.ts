import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { TrainingNeedComponent } from './training-need/training-need.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingAttendancesComponent } from './training-attendances/training-attendances.component';
import { TrainingReportsComponent } from './training-reports/training-reports.component';
import { TrainingAddComponent } from './training-add/training-add.component';
import { ExamOverviewComponent } from './exam-overview/exam-overview.component';
import { CalendarComponent } from './calendar/calendar.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'training-need',
                component: TrainingNeedComponent
            },
            {
                path: 'training',
                children: [
                    {
                        path: 'overview',
                        component: TrainingListComponent
                    },
                    {
                        path: 'attendance',
                        component: TrainingAttendancesComponent
                    },
                    {
                        path: 'details',
                        component: TrainingDetailsComponent
                    },
                    {
                        path: 'reports',
                        component: TrainingReportsComponent
                    },
                    {
                        path: 'add',
                        component: TrainingAddComponent
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
                path: 'calendar',
                component: CalendarComponent
            }
        ]
    }
]