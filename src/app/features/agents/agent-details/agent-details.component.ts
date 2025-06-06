import { map, Observable, switchMap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AgentsService } from 'src/app/services/agents.service';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss']
})
export class AgentDetailsComponent {
  protected selectedAbilitie: number = 0;

  protected readonly route = inject(ActivatedRoute);
  protected readonly agentsService = inject(AgentsService);
  protected readonly agent$ = this.route.params.pipe(
    map(params => params['id']),
    switchMap(id => this.agentsService.getAgentById(id)),
  );
}
