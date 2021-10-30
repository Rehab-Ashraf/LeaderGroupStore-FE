import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRouting } from './auth-routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ LoginComponent,
    RegisterComponent,],
  imports: [
    CommonModule,
    AuthRouting,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
