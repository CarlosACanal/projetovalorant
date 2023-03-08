import { BASE_URL } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getMaps(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}maps`, { params: { language: 'pt-BR' } });
  }
}
