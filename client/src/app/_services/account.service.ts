import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "https://localhost:5001/api/";
  private curentUserSource = new ReplaySubject<User>(3);
  currentUser$ = this.curentUserSource.asObservable();

  constructor(private http: HttpClient) {

  }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((res: User) => {
        const user = res;
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.curentUserSource.next(user)
        }
      })
    )
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.curentUserSource.next(user)
        }
      })
    )
  }

  setCurrentUser(user: User) {
    this.curentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.curentUserSource.next(null!);
  }
}