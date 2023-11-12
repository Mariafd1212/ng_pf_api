import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styles: [],
})
export class StudentsTableComponent {
  @Input() dataSource: Student[] = [];
  @Output() deleteStudent = new EventEmitter<number>();
  @Output() editStudent = new EventEmitter<Student>();

  displayedColumns = ['id', 'fullname', 'course', 'email', 'actions'];

  constructor(private router: Router) { }

  goToDetail(userId: number): void {
    this.router.navigate(
      [
        'dashboard',
        'students',
        'detail',
        userId,
        {
          nombre: 'Maria',
          edad: 30,
          curso: 'Inglés'
        },
      ],
    );
  }
}
