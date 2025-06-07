import { Component, inject, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Agent } from '../utils/Agent';
import { Store } from '@ngrx/store';
import * as agentSelectors from './../../../store/selectors/agent.selectors';
import { loadAgents } from 'src/app/store/actions/agent.actions';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss'],
})
export class AgentListComponent implements OnInit {
  private readonly store = inject(Store);

  protected readonly agents$: Observable<Agent[]> = this.store
    .select(agentSelectors.selectAllAgents)
    .pipe(map((agents) => agents.filter((agent) => agent.isPlayableCharacter)));
  protected readonly agentsLoading$: Observable<boolean> = this.store.select(
    agentSelectors.selectAgentsIsLoading
  );

  ngOnInit(): void {
    this.store.dispatch(loadAgents());
  }
}
