import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('./pages/home/home.module').then(
                (m) => m.HomeModule),
          },

          {
            path: 'courses',
            loadChildren: () =>
              import('./pages/courses/courses.module').then(
                (m) => m.CoursesModule
              ),
          },

          {
            path: 'users',
            loadChildren: () =>
              import('./pages/users/users.module').then(
                (m) => m.UsersModule),
          },

          {
            path: 'students',
            loadChildren: () =>
              import('./pages/students/students.module').then(
                (m) => m.StudentsModule),
          },

          {
            path: 'enrollments',
            loadChildren: () =>
              import('./pages/enrollments/enrollments.module').then(
                (m) => m.EnrollmentsModule
              ),
          },

          {
            path: '**',
            redirectTo: 'home',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
