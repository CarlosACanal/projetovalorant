import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor(private http: HttpClient) {
  }

  getAgents(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}agents`, { params: { language: 'pt-BR' } }).pipe(take(1));
  };

  getAgentById(agentId: String): Observable<any> {
    return this.http.get<any>(`${BASE_URL}agents/${agentId}`, { params: { language: 'pt-BR' } }).pipe(take(1));
  }

}