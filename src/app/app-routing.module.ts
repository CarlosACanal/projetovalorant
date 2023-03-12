import { MapsComponent } from './maps/maps.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agents',
    loadChildren: () => import('../app/components/agents/agents.module')
      .then(m => m.AgentsModule)
  },
  { path: 'about', component: AboutComponent },
  {path: 'maps', component: MapsComponent},
  { path: '', redirectTo: 'agents', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
