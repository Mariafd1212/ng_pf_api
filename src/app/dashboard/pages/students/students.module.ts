import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { StudentsService } from './students.service';
import { StudentsBetterService } from './students-better.service';
import { MockStudentsService } from './mock-students.service';
import { ApiUrl } from 'src/app/config/url.token';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    StudentsTableComponent,
    StudentsDetailComponent,
  ],
  imports: [CommonModule, SharedModule, StudentsRoutingModule],
  exports: [StudentsComponent],

  providers: [
    StudentsService,

    {
      provide: StudentsService,
      useClass: StudentsService,
    },

    {
      provide: ApiUrl,
      useValue: {
        url: 'http://localhost:3000/students',
      },
    },
  ],
})
export class StudentsModule { }
