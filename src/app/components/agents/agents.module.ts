import { MapsService } from './../../services/maps.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";


import { AgentsRoutingModule } from './agents-routing.module';
import { CardComponent } from './../card/card.component';
import { AgentsService } from 'src/app/services/agents.service';
import { AgentsComponent } from './agents.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentListComponent } from './agent-list/agent-list.component';

@NgModule({
  declarations: [
    AgentsComponent,
    AgentDetailsComponent,
    CardComponent,
    AgentListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgentsRoutingModule

  ],
  providers: [AgentsService],
  bootstrap: []
})
export class AgentsModule { }
