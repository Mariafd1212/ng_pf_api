import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentsComponent } from './students.component';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';



const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },
  {
    path: 'detail/id',
    component: StudentsDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}