import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight, FlightDTO } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseURL = `${environment.apiURL}/flights`;

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.baseURL, this.httpOptions);
  }

  getById(id: any): Observable<Flight> {
    return this.http.get<Flight>(`${this.baseURL}/${id}`, this.httpOptions);
  }

  createNewFlight(outgoingFlight: FlightDTO): Observable<Flight> {
    return this.http.post<Flight>(this.baseURL, outgoingFlight, this.httpOptions);
  }

  removeFlight(oldFlight: number): Observable<Flight> {
    return this.http.delete<Flight>(`${this.baseURL}/${oldFlight}`, this.httpOptions);
  }

  updateFlight(updatingFlight: Flight): Observable<Flight> {
    return this.http.put<Flight>(`${this.baseURL}/${updatingFlight.id}`, updatingFlight, this.httpOptions);
  }
}
