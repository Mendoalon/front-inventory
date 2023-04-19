import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any,
    private _categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  onNoclick() {
    this.dialogRef.close(3);
  }

  deleteCategory():void {
    if (this._data != null) {
      let { id } = this._data;
      this._categoryService.deleteCategorie(id).subscribe(data => {
        this.dialogRef.close(1);
      }, (error)=>{
        this.dialogRef.close(2);
      })
    }else{
      this.dialogRef.close(2);
    }
  }

}
