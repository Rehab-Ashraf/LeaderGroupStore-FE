import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './toaster/toaster.component';
import { PermissionPipe } from '../_core/pipe/permission.pipe';

@NgModule({
  declarations: [ToasterComponent, PermissionPipe],
  imports: [
    CommonModule,
  ],
  exports:[
    PermissionPipe
  ]
})
export class SharedModule { }
