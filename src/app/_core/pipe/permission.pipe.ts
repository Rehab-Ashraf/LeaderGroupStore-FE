import { Injector, Pipe, PipeTransform } from "@angular/core";
import { PermissionManagerService } from "../services/permission-manager.service";

@Pipe({
  name: "permission",
})
export class PermissionPipe implements PipeTransform {
  permissionManagerS: PermissionManagerService;
  constructor(injector: Injector) {
    this.permissionManagerS = injector.get(PermissionManagerService);
  }
  transform(permission: string, ...args: unknown[]): unknown {
   // console.log(permission);

    if (this.permissionManagerS.isGranted(permission)) {
      return true;
    } else {
      return false;
    }
  }
}