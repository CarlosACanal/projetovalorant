import { MapsService } from './../../../services/maps.service';
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
  selectedAbilitie: number = 0;
  initial: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agentsService: AgentsService,
    private mapsService: MapsService
  ) { }

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });

    this.agentsService.getAgentById(this.id)
      .subscribe((agent) => {
        console.log(agent.data);
        this.agent = agent.data;
        this.initial = true;
      });

    this.mapsService.getMaps().subscribe((maps) => {
      console.log(maps)
    })
  }

  showAbilitie(i: number) {
    this.selectedAbilitie = i;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
