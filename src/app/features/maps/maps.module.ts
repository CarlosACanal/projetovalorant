import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsService } from 'src/app/services/maps.service';
import { MapsListComponent } from './maps-list/maps-list.component';
import { MapDetailsComponent } from './map-details/map-details.component';


@NgModule({
  declarations: [
    MapsListComponent,
    MapDetailsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ],
  providers: [MapsService]
})
export class MapsModule { }
