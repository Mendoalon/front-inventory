import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { Product, ProductResponse } from 'src/app/core/intefaces/RespProducts';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base_url: string = environment.base_url;

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    const endpoind = `${this.base_url}/products`;

    return this.http.get<ProductResponse>(endpoind)
      .pipe(
        map(response => response.productResponse.products),
        catchError(error => {
          return [];
        })
      );
  }


}
