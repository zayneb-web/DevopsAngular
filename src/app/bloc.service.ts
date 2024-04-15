import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private baseUrl = 'http://192.168.0.188:8060'; // Assuming your backend API is running at this URL

  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/bloc/a`);
  }

  addBloc(bloc: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/bloc/add`, bloc);
  }

  updateBloc(bloc: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/bloc/update`, bloc);
  }

  deleteBloc(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/bloc/delete/${id}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/bloc/${id}`);
  }

  searchBlocsByNomBloc(nomBloc: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/bloc/search/${nomBloc}`);
  }
}

