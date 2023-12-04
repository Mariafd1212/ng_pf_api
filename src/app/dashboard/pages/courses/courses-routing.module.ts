import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';



const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'detail',
    component: CourseDetailComponent,
  },
  {
    path: 'dialog',
    component: CoursesDialogComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule { }