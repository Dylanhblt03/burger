import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private http = inject(HttpClient);
  
  private apiUrl = 'http://localhost:8080/contact.php'; 
  private getArticleUrl = 'http://localhost:8080/article.php';

  sendContact(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers });
  }

  getContactInfo(): Observable<any> {
    return this.http.get(`${this.getArticleUrl}?id=6`);
  }
}