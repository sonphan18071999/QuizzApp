import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'https://api.example.com/auth';
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null,
  );
  public currentUser: Observable<any> = this.currentUserSubject.asObservable();

  // private http = inject(HttpClient);

  constructor() {}

  // public login(username: string, password: string): Observable<any> {
  //   return this.http
  //     .post<any>(`${this.authUrl}/login`, { username, password })
  //     .pipe(
  //       catchError((error) => {
  //         throw error;
  //       }),
  //     );
  // }

  public logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }
}
