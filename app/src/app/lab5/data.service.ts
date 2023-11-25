import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lab5Module } from './lab5.module';


@Injectable({
  providedIn: Lab5Module
})
export class DataService {
  private apiUrl: string = 'https://randomuser.me/api/?results=50';

  constructor(private http: HttpClient) { }

  getData(){
    const data = this.http.get(this.apiUrl);
    return data;
  }
}
