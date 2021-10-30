import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpHeaderResponse,
} from "@angular/common/http";
import { Injector } from "@angular/core";
import { Observable, throwError } from "rxjs";

import { catchError, map } from "rxjs/operators";
import { ToasterComponent } from "src/_shared/toaster/toaster.component";
export class HttpErrorInterceptor implements HttpInterceptor {
  

  toaster: ToasterComponent;


  constructor(private injector: Injector) {
    this.toaster = this.injector.get(ToasterComponent);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpHeaderResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        console.log(error.status);

        switch (error.status) {
          case 404:
            errorMessage = `Error Code: ${error.status}\nMessage: Not Found`;
            
            this.toaster.error(errorMessage, "");
            break;
          case 500:
            errorMessage = `حدثت مشكلة بالسيرفر`;
            this.toaster.error(errorMessage, "");

            break;
          case 440:
            errorMessage = `انتهت صلاحية الجلسة يرجي تسجيل الدخول`;

            this.toaster.error(errorMessage, "");

            break;
          case 401:
            
            break;

          case 400:
          case 429:
            if (error.error.validationErrors != undefined) {
              errorMessage = `${error.error.validationErrors[0]}`;
            } else {
              errorMessage = `${error.error}`;
            }
            this.toaster.error(errorMessage, "");

            break;

          default:
            errorMessage = "unknown error";
            this.toaster.error(errorMessage, "");

            break;
        }

        return throwError(error);
      })
    );
  }
}