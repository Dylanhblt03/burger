import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:8080/article.php';

  getArticleById(id: number): Observable<any> {

    return this.http.get<any>(`${this.API_URL}?id_article=${id}`);
  }
}