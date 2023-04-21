import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from 'src/app/core/intefaces/RespProducts';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'account', 'price', 'category', 'picture', 'actions'];
  dataSource!: Product[];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();

  }

  getProduct(): void {
    this._productService.getProduct().subscribe((producto: any) => {
      producto.forEach((product:any) => {        
        product.picture = 'data:image/jpeg;base64,'+ product.picture;
        product.category = product.category.name;
        this.dataSource = [...producto];    
      });       
      
    });

  }

  editCategory(nu1:any, nu2:any, nu3:any){

  }

  deleteCategory(id: any){

  }

  openDialog(){

  }

  sendById(num: any){

  }

}
