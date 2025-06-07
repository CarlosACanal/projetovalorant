import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AgentActions from './../actions/agent.actions';
import { inject, Injectable } from '@angular/core';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AgentsService } from 'src/app/services/agents.service';

@Injectable()
export class AgentEffects {
  private action$ = inject(Actions);
  private agentService = inject(AgentsService);

  loadAgents$ = createEffect(() =>
    this.action$.pipe(
      ofType(AgentActions.loadAgents),
      mergeMap(() =>
        this.agentService.getAgents().pipe(
          map((agents) => AgentActions.loadAgentsSuccess({ agents: agents })),
          catchError((error) =>
            of(AgentActions.loadAgentsFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
