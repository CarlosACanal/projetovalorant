import { AgentsService } from './../../services/agents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  agents:any;

  constructor(private agentsService: AgentsService) { }

  ngOnInit(): void {
    this.agentsService.getAgents()
      .subscribe((agents) => {
        this.agents = agents;
      })

    console.log(this.agents);
  }

}
