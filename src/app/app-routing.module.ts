import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: `home`,
    pathMatch: "full",
  },
  {
    path:"home",
    component: HomeComponent,
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./../_auth/auth.module").then((mod) => mod.AuthModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
