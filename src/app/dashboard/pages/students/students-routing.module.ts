import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentsComponent } from './students.component';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule { }
