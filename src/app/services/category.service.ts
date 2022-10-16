import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CATEGORY_PORT } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(CATEGORY_PORT)
  }

  getCategory(id: number): Observable<any> {
    return this.httpClient.get(`${CATEGORY_PORT}/${id}`)
  }

  remove(id: number): Observable<any> {
    return this.httpClient.delete(`${CATEGORY_PORT}/${id}`)
  }
  create(name: any): Observable<any> {
    return this.httpClient.post(`${CATEGORY_PORT}`, { name })
  }
  update(data: any): Observable<any> {
    return this.httpClient.put(`${CATEGORY_PORT}/${data.id}`, data)
  }
}
