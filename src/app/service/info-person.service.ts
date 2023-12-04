import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonInfo } from './info-person';

@Injectable({
  providedIn: 'root'
})
export class InfoPersonService {

  private apiUrl = 'https://tu-api-rest.com/persons';


  constructor(private http: HttpClient) {

  }

  getPersonData(): Observable<PersonInfo> {
    return this.http.get<PersonInfo>(this.apiUrl);
  }
}
