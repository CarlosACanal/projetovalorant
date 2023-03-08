import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorInterceptor } from './loader-interceptor.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoaderComponent,
    AboutComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
