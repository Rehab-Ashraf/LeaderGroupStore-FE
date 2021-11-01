import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { AuthGuard } from './_core/guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: `home`,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path:"home",
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: "auth",
    loadChildren: () =>
      import("../app/_auth/auth.module").then((mod) => mod.AuthModule),
  },
  {
    path: "Category",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("../app/categories-module-container/categories.module").then((mod) => mod.CategoriesModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
