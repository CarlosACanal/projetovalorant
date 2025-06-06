import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorInterceptor } from './loader-interceptor.interceptor';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MapsComponent } from './features/maps/maps.component';
import { AboutComponent } from './features/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    MapsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NavBarComponent,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
