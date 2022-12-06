import { AgentDetailsComponent } from '../agents/agent-details/agent-details.component';
import { AgentsComponent } from './agents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AgentsComponent, children: [
      { path: ':id', component: AgentDetailsComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
