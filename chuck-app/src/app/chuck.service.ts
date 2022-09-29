import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor() { }

  private http = inject(HttpClient);


  getCategories():Observable<Object> {
     return this.http.get('https://api.chucknorris.io/jokes/categories')
     .pipe(catchError(err => of(['default category 1', 'default category 1'])));
  }
}
