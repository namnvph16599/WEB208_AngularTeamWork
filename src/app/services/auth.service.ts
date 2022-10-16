import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserInfo, IUserLogin, IUserRegister } from '../interfaces/user';
import { LOGIN_PORT, REGISTER_PORT } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signup(data: IUserRegister): Observable<IUserRegister> {
    return this.http.post<any>(REGISTER_PORT, data)
  }
  login(data: IUserLogin): Observable<any> {
    return this.http.post<any>(LOGIN_PORT, data)
  }
}
