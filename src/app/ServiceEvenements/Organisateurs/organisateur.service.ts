import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organisateur } from 'src/app/ModelsEvents/organisateur';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganisateurService {
  private URL = environment.apiBasrUrlEvent;
  constructor(private http: HttpClient) { }

  getAllOrganisateurs(): Observable<Organisateur[]> {
    return this.http.get<Organisateur[]>(`${this.URL}/api/organisateurs/all`);
  }

  getOrganisateurById(idorganisateur: number): Observable<Organisateur[]> {
    return this.http.get<Organisateur[]>(`${this.URL}/api/organisateurs/${idorganisateur}`);
  }

  createOrganisateur(organisateurData: Organisateur) : Observable<Organisateur[]> {
    return this.http.post<Organisateur[]>(`${this.URL}/api/organisateurs/add`, organisateurData);
  }

  updateOrganisateur(idorganisateur: number, organisateur: Organisateur) : Observable<Organisateur>  {
    return this.http.put<Organisateur>(`${this.URL}/api/organisateurs/update/${idorganisateur}`, organisateur);
  }

  deleteOrganisateur(idorganisateur: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/api/organisateurs/delete/${idorganisateur}`);
  }
}
