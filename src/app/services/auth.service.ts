import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIBuilder } from '../../apiBuilder';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  isAuthorised() {
    // შეეცდება რომ ამოიღოს ტოკენი
    let token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  login(email: string, password: string) {
    // ჩვენი პოსტი იღებს 2 პარამეტრს
    // პირველი არის უშუალოდ ენდპოინტი (ლინკი),
    // ხოლო მეორე არის იუზერის ინფორმაცია
    return this._http.post<any>(APIBuilder.getEndpoint('auth/login'), {
      email: email,
      password: password,
    });
  }

  getProfile() {
    let token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this._http.get<any>(APIBuilder.getEndpoint('auth/profile'), {
      headers: headers,
    });
  }
}
