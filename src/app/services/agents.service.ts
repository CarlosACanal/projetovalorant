import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  readonly apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = "https://valorant-api.com/v1/";
  }


  getAgents(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}agents`);
  }

  getAgentsByName(name: string) {
    let agentsList: any[] = [];
    this.getAgents()
      .subscribe((agents) => {
        agents.data.forEach((agent: any) => {
          if (agent.isPlayableCharacter != false) {
            agentsList.push(agent);
          }
        });
      });
    
    for (let i = 0; i < agentsList.length; i++) {
      let agent: any = agentsList[i];
      if (agent.displayName == name) {
        return agent;
      }
    }
    return null;
  }
}
