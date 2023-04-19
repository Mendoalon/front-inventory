import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { Category, CategoryResponse } from 'src/app/core/intefaces/RespCategories';





@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource!: Category[];


  

  constructor(private _categoryService:CategoryService) { }

  ngOnInit(): void {    
    this.getCategories();

}



getCategories():void {
  this._categoryService.getCategories()
  .subscribe((category: any) => {
    this.dataSource = category.category;
  }
  ), (error:any) =>{console.log('erro => ',error)}
}
}
