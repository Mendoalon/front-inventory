import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/modules/shared/services/category.service';
import { ProductService } from 'src/app/modules/shared/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

public productForm: FormGroup;
nameForm: string= 'Crear';
categories: any;
selectFile: any;
nameImg: string= "";


  constructor(private _ProductService: ProductService,
              private _categoryService: CategoryService,
              public fb: FormBuilder,
              private dialogRef: MatDialogRef<NewProductComponent>,

              @Inject(MAT_DIALOG_DATA) public _data: any)
              {
                this.productForm = this.fb.group({
                  name: ['', Validators.required],
                  price: ['', Validators.required],
                  account: ['', Validators.required],
                  category: ['', Validators.required],
                  picture: ['', Validators.required]
                });  
              }

  ngOnInit(): void {
    this.getCategory();
  }

  
  onSave(){
     let {name,price,account,category } = this.productForm.value;
    let data = { name, price, account, category, picture: this.selectFile}

    this._ProductService.saveProduct(data).subscribe((data:any) => {
      this.dialogRef.close(1);    
    },(error:any)=>{
      this.dialogRef.close(2);
    })
  }

onCancel(){
  this.dialogRef.close(3);
}

getCategory(){
  this._categoryService.getCategories().subscribe( (data:any)=>{
    this.categories = data.category;    
  },(error)=>{
    console.log('error', error);
    
  });
}

onFileChanged(event: any){
 this.selectFile = event.target.files[0];
 this.nameImg = event.target.files[0].name;
}


}
