import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/jwt-login.php';

  constructor(private http: HttpClient) {}

  fetchJwtToken() {
    return this.http.get<{ token: string }>(this.apiUrl).pipe(
      tap(response => {
        localStorage.setItem('api_jwt', response.token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('api_jwt');
  }

  clearToken(): void {
    localStorage.removeItem('api_jwt');
  }
}