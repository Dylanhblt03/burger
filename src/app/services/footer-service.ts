import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private apiUrl = 'http://localhost:8080/footer_data.php';
  private newsletterUrl = 'http://localhost:8080/newsletter.php';

  constructor(private http: HttpClient) {}

  getFooterContent(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  subscribe(email: string): Observable<any> {
    return this.http.post(this.newsletterUrl, { email });
  }
}