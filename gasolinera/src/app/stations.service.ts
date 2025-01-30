import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  private apiUrl = 'http://localhost:8080/stations';

  constructor(private http: HttpClient) { }

  getStations(): Observable<GasStation[]> {
    return this.http.get<GasStation[]>(this.apiUrl).pipe(
      delay(500), // Simula un tiempo de respuesta (opcional)
      tap(stations => console.log('Estaciones obtenidas:', stations)),
      catchError(this.handleError<GasStation[]>('getStations', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`Error en ${operation}:`, error);

      if (error.error instanceof ErrorEvent) {
        console.error('Ocurrió un error:', error.error.message);
      } else {
        console.error(
          `El backend retornó el error ${error.status}, ` +
          `con el mensaje: ${error.statusText}`);
      }

      return throwError(() => error);
    };
  }
}

export interface GasStation {
  name: string;
  address: string;
  phoneNumber: string;
}
