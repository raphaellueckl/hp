import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    console.log(`Is user logged in? ' + ${this.getUser() !== null}`);
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
