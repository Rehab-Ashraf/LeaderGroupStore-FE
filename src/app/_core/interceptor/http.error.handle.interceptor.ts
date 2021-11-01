import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaderResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injector } from '@angular/core';
import { retry, catchError, map } from "rxjs/operators";
import { ToasterComponent } from 'src/app/_shared/toaster/toaster.component';
import { Router } from '@angular/router';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  toaster: ToasterComponent;
  router:Router

  constructor(private injector: Injector) {
    this.toaster = this.injector.get(ToasterComponent);
    this.router = this.injector.get(Router)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(0),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpHeaderResponse) {
        }
        return event;
      }),
      catchError((error:HttpErrorResponse)=>{
        let errorMessage = "";
        console.log(error)
        switch (error.status) {
          case 404:
            errorMessage = `Error Code: ${error.status}\nMessage: Not Found`;
            break;
          case 500:
            errorMessage = `Something went wrong`;
            break;
          case 400:
            errorMessage = `${error.error.data}`;
            break;
          case 401:
            this.router.navigate(["/auth/login"]);
              break;
          case 403:
              errorMessage = `ليس لديك صلاحية`;
              this.toaster.error(errorMessage, "");
              break;
          default:
            errorMessage = "unknown error";
            break;
        }
        this.toaster.success(errorMessage);
        return throwError(error)
      })
    );
  }
}