import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MapsComponent } from './features/maps/maps.component';
import { AboutComponent } from './features/about/about.component';
import { AgentEffects } from './store/effects/agent.effects';
import { agentReducer } from './store/reducers/agent.reducer';

@NgModule({
  declarations: [AppComponent, MapsComponent, AboutComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NavBarComponent,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ agents: agentReducer }),
    EffectsModule.forRoot([AgentEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
