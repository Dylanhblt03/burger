import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/article.php';

  getArticle(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}?id_article=${id}`);
  }
}