import { AgentsService } from 'src/app/services/agents.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss']
})
export class AgentDetailsComponent implements OnInit {

  id?: any;
  subs!: Subscription;
  agent!: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agentsService: AgentsService,
  ) { }

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });

    this.agentsService.getAgentById(this.id)
      .subscribe((agent) => {
        console.log(agent.data);
        this.agent = agent.data;
      });
  }
  
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
