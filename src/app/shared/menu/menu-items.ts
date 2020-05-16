export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/training',
    title: 'Training',
    type: 'sub',
    icontype: 'fab fa-discourse text-green',
    collapse: 'training',
    isCollapsed: true,
    children: [
      { path: 'overview', title: 'Overview', type: 'link' }
    ]
  },
  {
    path: '/admin/exam',
    title: 'Exam',
    type: 'sub',
    icontype: 'fas fa-tablet text-indigo',
    collapse: 'exam',
    isCollapsed: true,
    children: [
      { path: 'overview', title: 'Overview', type: 'link' },
    ]
  },
  {
    path: '/admin/training-need',
    title: 'Training Need',
    type: 'link',
    icontype: 'fas fa-chart-pie text-blue'
  },
  {
    path: '/admin/calendar',
    title: 'Calendar',
    type: 'link',
    icontype: 'far fa-calendar-alt text-yellow'
  },
  {
    path: '/admin/management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-red'
  },
  {
    path: '/user/training/overview',
    title: 'Trainings',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/user/exam/overview',
    title: 'Exams',
    type: 'link',
    icontype: 'fas fa-tablet text-indigo'
  },
  {
    path: '/user/online-courses',
    title: 'Online Courses',
    type: 'link',
    icontype: 'fas fa-globe-asia text-green'
  },
  {
    path: '/user/survey',
    title: 'Survey',
    type: 'link',
    icontype: 'fas fa-poll-h text-blue'
  },
  {
    path: '/user/calendar',
    title: 'Calendar',
    type: 'link',
    icontype: 'far fa-calendar-alt text-yellow'
  }
];