import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public _data: any,
              private _categoryService: CategoryService,
              private _productService:ProductService ) {
  }

  ngOnInit(): void {
  }

  onNoclick() {
    this.dialogRef.close(3);
  }

  delete(): void {

    if (this._data != null) {

      if (this._data.mudule == "category") {
        let { id } = this._data;
        this._categoryService.deleteCategorie(id).subscribe(data => {
          this.dialogRef.close(1);
        }, (error) => {
          this.dialogRef.close(2);
        })
      } else if (this._data.mudule == "product"){
        let { id } = this._data;
        this._productService.deleteProduct(id).subscribe(data => {
          this.dialogRef.close(1);
        }, (error) => {
          this.dialogRef.close(2);
        })
      }else {
        this.dialogRef.close(2);
      }


    }


  }

}
