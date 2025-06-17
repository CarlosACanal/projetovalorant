import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AgentState } from '../agent.state';
import { RoleEnum } from 'src/app/features/agents/utils/Role';

//Agents
export const selectAgentsState = createFeatureSelector<AgentState>('agents');

export const selectAllAgents = createSelector(
  selectAgentsState,
  (state) => state.entity
);

export const selectAgentsIsLoading = createSelector(
  selectAgentsState,
  (state) => state.loading
);

//filter role

export const selectSelectedRoleEnum = createSelector(
  selectAgentsState,
  (state) => state.roleFitler
);

//Search
export const selectSearchTerm = createSelector(
  selectAgentsState,
  (state) => state.searchTerm
);
export const selectFilteredAgents = createSelector(
  selectAllAgents,
  selectSearchTerm,
  selectSelectedRoleEnum,
  (agents, term, selectedRoleEnum) => {
    const formattedTerm = term.toLowerCase().trim();

    return agents.filter((agent) => {
      const matchesRole = selectedRoleEnum
        ? agent.role?.uuid === selectedRoleEnum
        : true;

      const matchesTerm = formattedTerm
        ? agent.displayName.toLowerCase().includes(formattedTerm)
        : true;

      return matchesRole && matchesTerm;
    });
  }
);
