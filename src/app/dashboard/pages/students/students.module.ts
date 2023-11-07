import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { Router } from '@angular/router';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailComponent,
    StudentsTableComponent,
    StudentsDialogComponent
  ],

  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
