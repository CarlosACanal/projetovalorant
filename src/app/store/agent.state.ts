import { Agent } from "../features/agents/utils/Agent";

export interface AgentState {
    entity: Agent[];
    loading: boolean;
    error: string | null;
}