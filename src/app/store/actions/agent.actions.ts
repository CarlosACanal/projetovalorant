import { Role, RoleEnum } from 'src/app/features/agents/utils/Role';
import { Agent } from './../../features/agents/utils/Agent';
import { createAction, props } from '@ngrx/store';

export const loadAgents = createAction('[Agent] Load Agents');

export const loadAgentsSuccess = createAction(
  '[Agent] Load Agent Success',
  props<{ agents: Agent[] }>()
);

export const loadAgentsFailure = createAction(
  '[Agent] Load Agent Failure',
  props<{ error: string }>()
);

export const filterAgentsByTerm = createAction(
  '[Agent] Filter Agents By Term',
  props<{ term: string }>()
);

export const filterByRole = createAction(
  '[Agent] Fitler Agents By Role',
  props<{ role: RoleEnum | null }>()
);

export const resetFitlers = createAction('[Agent] Reset Agents Filter');
