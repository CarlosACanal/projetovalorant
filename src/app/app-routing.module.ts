
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { MapsComponent } from './features/maps/maps.component';

const routes: Routes = [
  {
    path: 'agents',
    loadChildren: () => import('../app/features/agents/agents.module')
      .then(m => m.AgentsModule)
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'maps',
    loadChildren: () => import('../app/features/maps/maps.module')
      .then(m => m.MapsModule)
  },
  { path: '', redirectTo: 'agents', pathMatch: 'full' },
    { path: '**', redirectTo: 'agents' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
