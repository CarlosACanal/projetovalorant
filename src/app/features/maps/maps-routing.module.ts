import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps.component';
import { MapsListComponent } from './maps-list/maps-list.component';
import { MapDetailsComponent } from './map-details/map-details.component';

const routes: Routes = [
  {
    path: '', component: MapsComponent, children: [
      { path: '', component: MapsListComponent },
      { path: ':id', component: MapDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
