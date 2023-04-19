import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { Category, CategoryResponse } from 'src/app/core/intefaces/RespCategories';
import { MatDialog } from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';





@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource!: Category[];




  constructor(private _categoryService: CategoryService,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCategories();

  }

  getCategories(): void {
    this._categoryService.getCategories()
      .subscribe((category: any) => {
        this.dataSource = category.category;
      }
      ), (error: any) => { console.log('erro => ', error) }
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(NewCategoryComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.openSnackBar('Categoria Agregada', "Exito");
        this.getCategories();
      } else if (result === 2) {
        this.openSnackBar('Se produjo un error al guardar categoria', "Error");
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {

    return this._snackBar.open(message, action, {
      duration: 2000
    })
  }

 edit(id: number,name: string,description: string){
  const dialogRef = this._dialog.open(NewCategoryComponent, {
    data: {id: id, name: name, description: description },
    width: '450px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      this.openSnackBar('Categoria Actualizada', "Exito");
      this.getCategories();
    } else if (result === 2) {
      this.openSnackBar('Se produjo un error al actualizar la categoria', "Error");
    }
  });
  }

}





