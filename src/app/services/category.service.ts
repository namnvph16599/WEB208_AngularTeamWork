import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CATEGORY_PORT } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<any> {
    return this.httpClient.get(CATEGORY_PORT);
  }

  getCategory(id: number): Observable<any> {
    return this.httpClient.get(`${CATEGORY_PORT}/${id}`);
  }

  remove(id: number): Observable<any> {
    return this.httpClient.delete(`${CATEGORY_PORT}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(`${CATEGORY_PORT}`, data);
  }
  update(data: any): Observable<any> {
    return this.httpClient.put(`${CATEGORY_PORT}/${data.id}`, data);
  }
}
