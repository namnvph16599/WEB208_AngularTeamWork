import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { PRODUCT_PORT } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = `http://localhost:3000/products`
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(PRODUCT_PORT);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${PRODUCT_PORT}/${id}`);
  }

  removeProduct(id: any): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`${PRODUCT_PORT}/${id}`);
  }

  addProduct(product: any): Observable<IProduct> {
    return this.httpClient.post<IProduct>(PRODUCT_PORT, product);
  }

  editProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${PRODUCT_PORT}/${product.id}`, product);
  }
}
