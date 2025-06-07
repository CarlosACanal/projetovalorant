import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AgentState } from '../agent.state';

export const selectAgentsState = createFeatureSelector<AgentState>('agents');

export const selectAllAgents = createSelector(
  selectAgentsState,
  (state) => state.entity
);

export const selectAgentsIsLoading = createSelector(
  selectAgentsState,
  (state) => state.loading
);
