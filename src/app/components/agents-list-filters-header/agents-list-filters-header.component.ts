import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as AgentActions from './../../store/actions/agent.actions';
import * as AgentSelectors from './../../store/selectors/agent.selectors';
import { RoleEnum } from 'src/app/features/agents/utils/Role';
import { LetModule } from '@ngrx/component';

@Component({
  selector: 'app-agents-list-filters-header',
  standalone: true,
  imports: [CommonModule, LetModule],
  templateUrl: './agents-list-filters-header.component.html',
  styleUrls: ['./agents-list-filters-header.component.scss'],
})
export class AgentsListFiltersHeaderComponent implements OnDestroy {
  private readonly store = inject(Store);
  protected readonly role$ = this.store.select(
    AgentSelectors.selectSelectedRoleEnum
  );

  protected filterByTerm(term: string): void {
    this.store.dispatch(AgentActions.filterAgentsByTerm({ term }));
  }

  protected selectRole(
    role: RoleEnum | null,
    previousRoly: RoleEnum | null
  ): void {
    this.store.dispatch(
      AgentActions.filterByRole({ role: role === previousRoly ? null : role })
    );
  }

  protected readonly RoleEnum = RoleEnum;

  ngOnDestroy(): void {
    this.store.dispatch(AgentActions.resetFitlers());
  }
}
