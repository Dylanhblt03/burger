import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/categories.php';

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}