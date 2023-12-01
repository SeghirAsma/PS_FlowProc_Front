import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from 'src/app/models/Provider';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderServiceService {

  private URL=environment.apiBaseUrl;
  constructor(private http :HttpClient) { }
  private addTokenToHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
  

  getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.URL}/api/provider/all`);
  }

  DeleteProvider(idProvider: number): Observable<void> {
    const headersWithToken = this.addTokenToHeaders();
    return this.http.delete<void>(`${this.URL}/api/provider/delete/${idProvider}`, { headers: headersWithToken });
  }
  AddProvider(providerData: Provider): Observable<Provider[]> {
    const headersWithToken = this.addTokenToHeaders();
    return this.http.post<Provider[]>(`${this.URL}/api/provider/add`, providerData, { headers: headersWithToken });
  }

  UpdateProvider(providerData: Provider): Observable<Provider[]> {
    const headersWithToken = this.addTokenToHeaders();
    return this.http.put<Provider[]>(`${this.URL}/api/provider/update`, providerData, { headers: headersWithToken });
  }

}
