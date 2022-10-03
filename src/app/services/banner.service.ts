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
}
