import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AddEditcategoriesComponent } from './add-editcategories/add-editcategories.component';
import { CategoriesRouting } from './categories-routing';
import { SharedModule } from '../_shared/shared.module';



@NgModule({
  declarations: [AllCategoriesComponent, AddEditcategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRouting,
    SharedModule
  ],
  exports:[
    AllCategoriesComponent
  ]
})
export class CategoriesModule { }
