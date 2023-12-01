import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from 'src/app/ModelsEvents/evenement';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
private URL = environment.apiBasrUrlEvent;
  constructor(private http: HttpClient) { }

  getAllEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.URL}/api/evenements/all`);
  }

  getEvenementById(idevenements: number): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.URL}/api/evenements/${idevenements}`);
  }

  createEvenement(evenementsData: Evenement) : Observable<Evenement[]> {
    return this.http.post<Evenement[]>(`${this.URL}/api/evenements/add`, evenementsData);
  }

  updateEvenement(idevenements: number, evenement: Evenement) : Observable<Evenement>  {
    return this.http.put<Evenement>(`${this.URL}/api/evenements/update/${idevenements}`, evenement);
  }

  DeleteEvenement(idevenements: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/api/evenements/delete/${idevenements}`);
  }

}
