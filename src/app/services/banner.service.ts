import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner } from '../interfaces/banner';
import { BANNER_PORT } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private httpClient: HttpClient) { }

  getBanners(): Observable<IBanner[]> {
    return this.httpClient.get<IBanner[]>(BANNER_PORT)
  }
  add(banner: IBanner): Observable<IBanner> {
    return this.httpClient.post<IBanner>(BANNER_PORT, banner)
  }
  update(banner: IBanner): Observable<IBanner> {
    return this.httpClient.put<IBanner>(`${BANNER_PORT}/${banner.id}`, banner)
  }
  remove(id: number): Observable<IBanner> {
    return this.httpClient.delete<IBanner>(`${BANNER_PORT}/${id}`)
  }
}
