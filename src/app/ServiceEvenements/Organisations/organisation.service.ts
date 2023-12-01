import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Organisation } from 'src/app/ModelsEvents/organisation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  private URL = environment.apiBasrUrlEvent;
  constructor(private http: HttpClient) { }

  getAllOrganisations(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(`${this.URL}/api/organisations/all`)
  }

  getOrganisationById(idorganisation: number): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(`${this.URL}/api/organisations/${idorganisation}`);
  }

  createOrganisation(organisationData: Organisation) : Observable<Organisation[]> {
    return this.http.post<Organisation[]>(`${this.URL}/api/organisations/add`, organisationData);
  }

  updateOrganisation(idorganisation: number, organisation: Organisation) : Observable<Organisation>  {
    return this.http.put<Organisation>(`${this.URL}/api/organisations/update/${idorganisation}`, organisation);
  }

  deleteOrganisation(idorganisation: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/api/organisations/delete/${idorganisation}`);
  }
}
