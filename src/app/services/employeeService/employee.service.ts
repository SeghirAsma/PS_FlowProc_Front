import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/app/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServiceUrl=environment.apiBaseUrl;
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjNAZ21haWwuY29tIiwiaWF0IjoxNzAwOTQ2OTk5LCJleHAiOjE3MDg5NDY5OTl9.R4CjfsndVCnH54yUvcYVMEoAaQJhTDuZlP8QWIYovN0'
  });
  constructor(private http :HttpClient) { }
  // Register employee
  public registerEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServiceUrl}/api/user/add`,employee,{headers:this.headers});
  }
  // Get employees
  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/api/user/all`);
  }

}
