import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from './models';
import { StudentsService } from './students.service';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  userName = '';

  students: Student[] = [];

  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService
  ) {
    this.students = this.studentsService.getStudents();
  }

  openStudentsDialog(): void {
    this.matDialog
      .open(StudentsDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.students = [
              ...this.students,
              {
                ...v,
                id: new Date().getTime(),
              },
            ];
          }
        },
      });
  }

  onEditStudent(student: Student): void {
    this.matDialog
      .open(StudentsDialogComponent, {
        data: student,
      })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {

            this.students = this.students.map((u) =>
              u.id === student.id ? { ...u, ...v } : u
            );
          }
        },
      });
  }

  onDeleteStudent(studentId: number): void {
    if (confirm('Esta seguro?')) {
      this.students = this.students.filter((u) => u.id !== studentId);
    }
  }
}
