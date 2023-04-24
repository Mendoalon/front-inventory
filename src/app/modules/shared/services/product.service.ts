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

  /**
   * Optener todos los productos
   */
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

    /**
   * Guardar producto
   */
  saveProduct(product:any): Observable<any> {

    const upLoadImgData = new FormData();
    upLoadImgData.append('picture', product.picture, product.picture.name); 
    upLoadImgData.append('name', product.name);  
    upLoadImgData.append('price', product.price);  
    upLoadImgData.append('account', product.account);  
    upLoadImgData.append('categoryId', product.category);  

    const endpoind = `${this.base_url}/products`;
    
    return this.http.post(endpoind, upLoadImgData );
  }

  /**
   * Actualizar producto.
   */
  updateProduct(product: any, id: number): Observable<any>{
    const upLoadImgData = new FormData();

    upLoadImgData.append('picture', product.picture, product.picture.name); 
    upLoadImgData.append('name', product.name);  
    upLoadImgData.append('price', product.price);  
    upLoadImgData.append('account', product.account);  
    upLoadImgData.append('categoryId', product.category); 

    const endpoind = `${this.base_url}/products/${id}`;

    return this.http.put(endpoind, upLoadImgData)
  }

  /**
   * Eliminar un producto.
   * @param id 
   */
  deleteProduct(id: number): Observable<any>{
    const endpoind = `${this.base_url}/products/${id}`;
    
    return this.http.delete(endpoind);
  }

}
