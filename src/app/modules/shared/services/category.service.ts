import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Category, RespCategories } from 'src/app/core/intefaces/RespCategories';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  base_url: string = environment.base_url;

  constructor(private http: HttpClient) { }

  /**
   * Optener todas las categorias.
   * @returns 
   */
  getCategories(): Observable<RespCategories> {
    const endpoind = `${this.base_url}/categories`

    return this.http.get<any>(endpoind).pipe(
      map(response => response.categoryResponse)
    )
  }

  /**
   * Guardar una categoria.
   * @param body 
   * @returns 
   */
  saveCategory(body: Category) {
    const endpoind = `${this.base_url}/categories`;
    return this.http.post(endpoind, body)
  }

  /**
   * Actualizar una categoria.
   * @param body 
   * @param id 
   * @returns 
   */
  updateCategory(body: Category, id: number) {
    const endpoind = `${this.base_url}/categories/${id}`;
    return this.http.put(endpoind, body)

  }

  /**
   * Eliminar una categoria.
   * @param id 
   */
  deleteCategorie(id: number) {
    const endpoind = `${this.base_url}/categories/${id}`;
    return this.http.delete(endpoind)
  }

  getCategoryById(id: number): Observable<RespCategories> {

    const endpoind = `${this.base_url}/categories/${id}`;
    
    return this.http.get(endpoind).pipe(
      map((response:any) => response.categoryResponse.category)
    )
  }


}
