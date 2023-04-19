import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RespCategories } from 'src/app/core/intefaces/RespCategories';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  base_url: string = environment.base_url;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<RespCategories> {

    const endpoind = `${this.base_url}/categories`

    return this.http.get<any>(endpoind).pipe(
      map(response => response.categoryResponse)
    )

  }

  saveCategory(body: any) {
    const endpoind = `${this.base_url}/categories`;
    return this.http.post(endpoind, body)
  }

}
