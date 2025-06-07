import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Agent } from '../features/agents/utils/Agent';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  constructor(private http: HttpClient) {}

  getAgents(): Observable<Agent[]> {
    return this.http
      .get<{ status: number; data: Agent[] }>(`${BASE_URL}agents`, {
        params: { language: 'pt-BR' },
      })
      .pipe(
        take(1),
        map((res) => res.data)
      );
  }

  getAgentById(agentId: String): Observable<Agent> {
    return this.http
      .get<{ status: number; data: Agent }>(`${BASE_URL}agents/${agentId}`, {
        params: { language: 'pt-BR' },
      })
      .pipe(
        take(1),
        map((res) => res.data)
      );
  }
}
