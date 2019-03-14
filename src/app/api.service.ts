import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Transport, ResponseTransport } from './transport';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = "http://hostgator.prolins.com.br/teste/api/transportadora/";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {

  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  allTransportes(): Observable<ResponseTransport> {
    return this.http.get<ResponseTransport>(`${apiUrl}?page=1`)
  }

  getTransportes(id): Observable<Transport> {
    return this.http.get<Transport>(`${apiUrl}${id}`, httpOptions).pipe(
      tap(heroes => console.log('fetched transportes')),
      catchError(this.handleError<Transport>('getTransportes'))
    );
  }

  addTransportes(transporte): Observable<Transport> {
    return this.http.post<Transport>(apiUrl, transporte, httpOptions).pipe(
      tap((transporte: Transport) => console.log(`added transporte w/ id=${transporte.id}`)),
      catchError(this.handleError<Transport>('addTransportes'))
    );
  }

  updateTransporte(id, transporte): Observable<any> {
    console.log(`${apiUrl}${id}`)
    console.log(transporte)
    return this.http.put(`${apiUrl}${id}`, transporte, httpOptions).pipe(
      tap(_ => console.log(`updated transporte id=${id}`)),
      catchError(this.handleError<any>('updateTransporte'))
    );
  }
}
