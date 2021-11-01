
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_core/guard/auth.guard';
import { AddEditcategoriesComponent } from './add-editcategories/add-editcategories.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';

const routes: Routes = [
  { path: "", component: AllCategoriesComponent,
    canActivate: [AuthGuard]
  },
  { path: "add-category", component: AddEditcategoriesComponent,
    canActivate: [AuthGuard],
    data: { permission: "Admin" },
  },
  { path: "edit-category", component: AddEditcategoriesComponent,
    canActivate: [AuthGuard],
    data: { permission: "Admin" },
  },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class CategoriesRouting {
}
