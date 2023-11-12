import { Injectable } from '@angular/core';
import { Student } from './models';

@Injectable({
    providedIn: 'root',
})
export class MockStudentsService {
    constructor() { }

    getStudents(): Student[] {
        console.log('Retornando data mock');
        return [];
    }
}