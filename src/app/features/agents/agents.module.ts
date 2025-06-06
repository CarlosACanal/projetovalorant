import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";


import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsService } from 'src/app/services/agents.service';
import { AgentsComponent } from './agents.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [
    AgentsComponent,
    AgentDetailsComponent,
    AgentListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgentsRoutingModule,
    CardComponent

  ],
  providers: [AgentsService],
  bootstrap: []
})
export class AgentsModule { }
