import { Component, OnInit } from '@angular/core';
import { AgentsService } from 'src/app/services/agents.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {

  agents: any[] = [];
  duelist: any[] = [];
  controller: any[] = [];
  initiatior: any[] = [];
  sentinel: any[] = [];
  selectedAgent: any;
  agentStatus: boolean = false;

  constructor(private agentsService: AgentsService) { }

  ngOnInit() {
    this.agentsService.getAgents()
      .subscribe((agents) => {
        agents.data.forEach((agent: any) => {
          if (agent.isPlayableCharacter != false) {
            this.agents.push(agent);
            switch (agent.role.displayName) {
              case ("Duelista"):
                this.duelist.push(agent);
                break;
              case ("Controlador"):
                this.controller.push(agent);
                break;
              case ("Iniciador"):
                this.initiatior.push(agent);
                break;
              case ("Sentinela"):
                this.sentinel.push(agent);
                break;
            }
          }   
        });
      });
  }

}
