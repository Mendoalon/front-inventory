import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../shared/services/category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/core/intefaces/RespCategories';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  nameForm: string = "Crear";

  constructor(private _categoryService: CategoryService,
              public fb: FormBuilder,
              private dialogRef: MatDialogRef<NewCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public _data: Category) 
              
              {
                this.nameForm = "Agregar";
                this.categoryForm = fb.group({
                name: ['', Validators.required],
                description: ['', Validators.required],
                });

                if (_data != null) {
                 this.updateForm(_data);
                 this.nameForm = "Actualizar";
                }
              }

  ngOnInit(): void {
  }

  onSave() {
    let category = this.categoryForm.value;

    if (this._data != null) {
      //Actualizar category
      this._categoryService.updateCategory(category, this._data.id).subscribe((datos: any) => {
        this.dialogRef.close(1);
      }, (err) => {
        this.dialogRef.close(2);
      })

    } else {
      //Crear category
      this._categoryService.saveCategory(category).subscribe((datos: any) => {
        this.dialogRef.close(1);
      }, (error: any) => {
        this.dialogRef.close(2);
      });

    }
  }

  onCancel() {
    this.dialogRef.close(3);
  }

  updateForm(data: Category) {
    this.categoryForm = this.fb.group({
      name: [data.name, Validators.required],
      description: [data.description, Validators.required],
    });
  }

}
