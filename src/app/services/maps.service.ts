import { BASE_URL } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getMaps() {
    return this.http.get(`${BASE_URL}maps`, { params: { language: 'pt-BR' } });
  }
}
