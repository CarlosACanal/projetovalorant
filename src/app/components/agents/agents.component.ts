import { Component, OnInit } from '@angular/core';
import { AgentsService } from 'src/app/services/agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  agents: any[] = [];
  selectedAgent: any

  constructor(private agentsService: AgentsService) { }

  ngOnInit(): void {
    this.agentsService.getAgents()
      .subscribe((agents) => {
        agents.data.forEach((agent: any) => {
          if (agent.isPlayableCharacter != false) {
            this.agents.push(agent);
          }
        });
      });

    console.log(this.agents);
  }

  detailAgent(agentId: String) {
    this.agentsService.getAgentById(agentId)
      .subscribe((agent) => {
        console.log(agent);
      })
  }
}
