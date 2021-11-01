import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_core/services/category.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  categories:any[] = []
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((res:any)=>{
      this.categories = res
      console.log(this.categories , res)
    })
  }
}
