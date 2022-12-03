import { AgentsService } from './../../services/agents.service';
import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewChecked {
  agents!:any[];

  constructor(private agentsService: AgentsService) { }

  ngOnInit(): void {
    this.agentsService.getAgents()
      .subscribe(agents => {
        this.agents = agents.data;
      })
  }

  ngAfterViewChecked() {
    console.log(this.agents)
  }

}
