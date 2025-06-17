import { Agent } from '../features/agents/utils/Agent';
import { RoleEnum } from '../features/agents/utils/Role';

export interface AgentState {
  entity: Agent[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  roleFitler: RoleEnum | null;
}
