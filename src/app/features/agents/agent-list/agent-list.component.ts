import { Component, OnInit } from '@angular/core';
import { AgentsService } from 'src/app/services/agents.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {

  agents: any[] = [];
  selectedAgent: any;
  agentStatus: boolean = false;

  constructor(private agentsService: AgentsService) { }

  ngOnInit() {
    this.agentsService.getAgents()
      .subscribe((agents) => {
        agents.data.forEach((agent: any) => {
          if (agent.isPlayableCharacter != false) {
            this.agents.push(agent);
          }
        });
      });
  }

}
