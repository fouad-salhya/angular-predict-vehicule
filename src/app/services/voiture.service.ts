import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Voiture } from '../models/voiture';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  private http = inject(HttpClient)

  private url ="http://localhost:5000/predict"

  predict(data: Voiture){
    return this.http.post<any>(`${this.url}`, data)
  }

}
