import { createReducer, on } from '@ngrx/store';
import { AgentState } from './../agent.state';
import * as AgentActions from './../actions/agent.actions';

export const initialState: AgentState = {
  entity: [],
  loading: false,
  error: null,
  searchTerm: '',
  roleFitler: null,
};

export const agentReducer = createReducer(
  initialState,
  on(AgentActions.loadAgents, (state) => ({ ...state, loading: true })),
  on(AgentActions.loadAgentsSuccess, (state, { agents }) => ({
    ...state,
    loading: false,
    entity: agents,
  })),
  on(AgentActions.loadAgentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AgentActions.filterAgentsByTerm, (state, { term }) => ({
    ...state,
    searchTerm: term,
  })),
  on(AgentActions.filterByRole, (state, { role }) => ({
    ...state,
    roleFitler: role,
  })),
  on(AgentActions.resetFitlers, (state) => ({
    ...state,
    searchTerm: '',
    roleFitler: null,
  }))
);
