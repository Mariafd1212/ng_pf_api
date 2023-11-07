import { Inject, Injectable } from '@angular/core';
import { Student } from './models';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {
    console.log('LA URL INYECTADA ES :', url);
  }

  getStudents(): Student[] {
    return [];
  }
}
