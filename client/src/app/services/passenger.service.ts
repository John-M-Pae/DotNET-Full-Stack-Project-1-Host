import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Passenger, PassengerDTO } from '../models/passenger';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  
  private baseURL = `${environment.apiURL}/passengers`;
  
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.baseURL, this.httpOptions);
  }

  getById(id: any): Observable<Passenger> {
    return this.http.get<Passenger>(`${this.baseURL}/${id}`, this.httpOptions);
  }

  createNewPassenger(outgoingPassenger: PassengerDTO): Observable<Passenger> {
    return this.http.post<Passenger>(this.baseURL, outgoingPassenger, this.httpOptions);
  }

  removePassenger(id: any): Observable<Passenger> {
    return this.http.delete<Passenger>(`${this.baseURL}/${id}`, this.httpOptions);
  }

  updatePassenger(updatingPassenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(`${this.baseURL}/${updatingPassenger.id}`, updatingPassenger, this.httpOptions);
  }
}
