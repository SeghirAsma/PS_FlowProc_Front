import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requisition } from 'src/app/models/requisition';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {
  private URL = environment.apiBaseUrl ;
  constructor(private http: HttpClient) { }

  
  getAllRequisitions(): Observable<Requisition[]> {
    return this.http.get<Requisition[]>(`${this.URL}/api/requisition/all`);
  }

  getApprovedRequisitions(): Observable<Requisition[]> {
    return this.http.get<Requisition[]>(`${this.URL}/api/requisition/approvedRequisitions`);
  }

  
  getRequisitionById(id: number): Observable<Requisition> {
    return this.http.get<Requisition>(`${this.URL}/api/requisition/find/${id}`);
  }

  addRequisitionHeader(requisitionData: Requisition, httpOptions?: any) : Observable<HttpEvent<Requisition[]>> {
    return this.http.post<Requisition[]>(`${this.URL}/api/requisition/addHeader`, requisitionData, httpOptions || {});
  }

  createRequisition(id: number): Observable<Requisition> {
    return this.http.post<Requisition>(`${this.URL}/api/requisition/${id}/send`, null);
  }

  updateRequisition(requisitionData: Requisition)  {
    return this.http.put<Requisition[]>(`${this.URL}/api/requisition/update`, requisitionData);
  }

  approveRequisition(id: number): Observable<Requisition> {
    return this.http.put<Requisition>(`${this.URL}/api/requisition/approve/${id}`, null);
  }

  rejectRequisition(id: number): Observable<Requisition> {
    return this.http.put<Requisition>(`${this.URL}/api/requisition/reject/${id}`, null);
  }

  isRequisitionApproved(id: number): Observable<Requisition> {
    return this.http.put<Requisition>(`${this.URL}/api/requisition/isRequisitionApproved/${id}`, null);
  }

  DeleteRequisition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/api/requisition/delete/${id}`);
  }

  getAllRequisitionLinesForRequisition(id: number): Observable<Requisition> {
    return this.http.get<Requisition>(`${this.URL}/api/requisition/${id}/requisitionLines`);
  }

  addRequisitionLineToRequisition(requisitionId: number): Observable<Requisition> {
    return this.http.post<Requisition>(`${this.URL}/api/requisition/${requisitionId}/addRequisitionLine`, null);
  }

  
  getRequisitionsByUserId(userId: number): Observable<Requisition> {
    return this.http.get<Requisition>(`${this.URL}/api/requisition/user/${userId}`);
  }
}
