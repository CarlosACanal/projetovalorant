import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";


import { AgentsRoutingModule } from './agents-routing.module';
import { CardComponent } from './../card/card.component';
import { AgentsService } from 'src/app/services/agents.service';
import { AgentsComponent } from './agents.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';

@NgModule({
  declarations: [
    AgentsComponent,
    AgentDetailsComponent,
    CardComponent,
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
