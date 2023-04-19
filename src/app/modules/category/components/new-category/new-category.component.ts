import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../shared/services/category.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private _categoryService: CategoryService,
              public fb: FormBuilder,
              private dialogRef: MatDialogRef<NewCategoryComponent>) {
    this.categoryForm = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSave() {

    if (this.categoryForm.valid) {
      let category = this.categoryForm.value;
      this._categoryService.saveCategory(category).subscribe(data => {
        console.log(data);
        this.dialogRef.close(1);
      }, (error: any) => {
        this.dialogRef.close(2);
      });
    }

  }
  onCancel() {
    this.dialogRef.close(3);
  }

}
