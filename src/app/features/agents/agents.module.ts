import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsService } from 'src/app/services/agents.service';
import { AgentsComponent } from './agents.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { AgentsListFiltersHeaderComponent } from 'src/app/components/agents-list-filters-header/agents-list-filters-header.component';

@NgModule({
  declarations: [AgentsComponent, AgentDetailsComponent, AgentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgentsRoutingModule,
    CardComponent,
    LoaderComponent,
    AgentsListFiltersHeaderComponent,
  ],
  providers: [AgentsService],
  bootstrap: [],
})
export class AgentsModule {}
