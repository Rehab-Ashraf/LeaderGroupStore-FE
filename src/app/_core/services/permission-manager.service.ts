import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PermissionManagerService {
  constructor() {}

  isGranted(permission:any) {
    let permisionStored:any = localStorage.getItem("permissions")
    let permissions: any[] = JSON.parse(permisionStored);

    console.log(permissions , permission)
    if (permissions === permission) {
      return true;
    }else{
      return false;
    }
  
  }
}
