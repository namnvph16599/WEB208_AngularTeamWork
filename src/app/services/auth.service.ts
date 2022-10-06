import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REGISTER_PORT } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signup(data: any): Observable<any> {
    return this.http.post<any>(REGISTER_PORT, data)
  }
}
