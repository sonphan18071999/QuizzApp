import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'elsa',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './components/assessment-cards/assessment-cards.component'
          ).then((m) => m.AssessmentCardsComponent),
      },
    ],
  },
  {
    path: 'assessment/:id',
    loadComponent: () =>
      import('./pages/assessment/assessment.component').then(
        (m) => m.AssessmentComponent,
      ),
    children: [
      {
        path: 'detail',
        loadComponent: () =>
          import(
            './components/assessment-detail/assessment-detail.component'
          ).then((m) => m.AssessmentDetailComponent),
      },
      {
        path: 'quiz/:id',
        loadComponent: () =>
          import('./components/quiz-card/quiz-card.component').then(
            (m) => m.QuizCardComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'elsa',
  },
];
