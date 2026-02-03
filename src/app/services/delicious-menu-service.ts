import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliciousMenuService {
  private apiUrl = 'http://localhost:8080/burgers.php';

  constructor(private http: HttpClient) {}

  getBurgers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}