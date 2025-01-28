import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private http: HttpClient) { }

  getStations(): Observable<GasStation[]> {
    return this.http.get<GasStation[]>('http://localhost:8080/stations');
  }

}

export interface GasStation {
  name: string;
  address: string;
  phoneNumber: string;
}
