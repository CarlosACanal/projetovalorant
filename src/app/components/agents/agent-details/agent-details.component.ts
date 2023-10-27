import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AgentsService } from 'src/app/services/agents.service';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss']
})
export class AgentDetailsComponent implements OnInit {

  id: any;
  subs!: Subscription;
  agent!: any;
  selectedAbilitie: number = 0;
  initial: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private agentsService: AgentsService,
  ) { }

  ngOnInit(): void {
    this.subs = this.route?.params?.subscribe((params): void => {
      this.id = params['id'];
    });

    this.agentsService.getAgentById(this.id)
      .subscribe((agent) => {
        console.log(agent.data);
        this.agent = agent.data;
        this.initial = true;
      });
  }

  showAbilitie(i: number) {
    this.selectedAbilitie = i;
  }

  ngOnDestroy() {
  }
}
