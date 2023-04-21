import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from 'src/app/core/intefaces/RespProducts';
import { NewProductComponent } from '../new-product/new-product.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'account', 'price', 'category', 'picture', 'actions'];
  dataSource!: Product[];

  constructor(private _productService: ProductService,
              public _dialog: MatDialog,
              private _snackBar: MatSnackBar) { }

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

  openProductDialog(){
    const dialogRef = this._dialog.open(NewProductComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.openSnackBar('Producto Agregado', "Exito");
        this.getProduct();
      } else if (result === 2) {
        this.openSnackBar('Se produjo un error al guardar producto', "Error");
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {

    return this._snackBar.open(message, action, {
      duration: 2000
    })
  }

  sendById(num: any){

  }

}
