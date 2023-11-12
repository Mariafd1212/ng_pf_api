import { Injectable } from '@angular/core';
import { StudentsService } from './students.service'; // Assuming you have a StudentsService
import { Student } from './models';
@Injectable()
export class StudentsBetterService {
    constructor(private studentsService: StudentsService) { }

    getStudentsWithProduct(): any {
        const students = this.studentsService.getStudents();
        const products = [
            {
                id: 1,
                name: '',
                lastName: '',
                course: '',
                email: '',
                token: '',
                role: ''
            },
        ];
        return {
            students,
            products,
        };
    }
}
