import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styles: [],
})
export class StudentsTableComponent {
  @Input()
  dataSource: Student[] = [];

  @Output()
  deleteStudent = new EventEmitter<number>();

  @Output()
  private _editStudent = new EventEmitter<Student>();
  public get editStudent() {
    return this._editStudent;
  }
  public set editStudent(value) {
    this._editStudent = value;
  }

  displayedColumns = ['id', 'fullname', 'email', 'curso', 'actions'];

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
