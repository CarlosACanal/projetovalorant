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
