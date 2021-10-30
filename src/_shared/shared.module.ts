import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToasterComponent } from './toaster/toaster.component';




@NgModule({
  declarations: [ToasterComponent],
  imports: [
    CommonModule,
  ],
  exports:[

  ]
})
export class SharedModule { }
