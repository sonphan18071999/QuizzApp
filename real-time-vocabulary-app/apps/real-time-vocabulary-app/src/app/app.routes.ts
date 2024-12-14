import { Route } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AssessmentCardsComponent } from './components/assessment-cards/assessment-cards.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: AssessmentCardsComponent,
      },
    ],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
