import { BrowserModule } from '@angular/platform-browser';
import { Injector, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { HomeComponent } from 'src/home/home.component';
import { DatePipe, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localAr from "@angular/common/locales/ar";
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { CategoriesModule } from './categories-module-container/categories.module';
import { SharedModule } from './_shared/shared.module';
import { HttpHeaderInterceptor } from './_core/interceptor/http.header.interceptor';
import { HttpErrorInterceptor } from './_core/interceptor/http.error.handle.interceptor';
import { ToasterComponent } from './_shared/toaster/toaster.component';
registerLocaleData(localAr);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    CategoriesModule,
    SharedModule
  ],
  providers: [
    Location,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
      deps: [Injector],
    },
    ToasterComponent,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: "ar-EG" },

    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
