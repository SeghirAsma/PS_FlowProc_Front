import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest';
import { Role } from 'src/app/models/Role';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //private userRole!: Role;
  private apiServiceUrl=environment.apiBaseUrl;
  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjNAZ21haWwuY29tIiwiaWF0IjoxNzAwOTUyNTU1LCJleHAiOjE3MDg5NTI1NTV9.S1rxETp95q6BJ_SKut-z8BfWNk0GYEr5rcS0nqzKXkw'
  // });
  private userRole: Role | undefined;

  setUserRole(role: Role | undefined) {
    this.userRole = role;
  }

  getUserRole(): Role | undefined {
    return this.userRole;
  }

  hasUserRole(expectedRole: Role): boolean {
    return !!this.userRole && this.userRole === expectedRole;
  }
  
  constructor(private http:HttpClient) { }
//authentification
  public authenticate(authRequest:AuthenticationRequest):Observable<AuthenticationRequest>{
    return this.http.post<AuthenticationRequest>(`${this.apiServiceUrl}/api/auth/authenticate`,authRequest);
  }



}
  // getUserRole(): Role {
  //   return this.userRole;
  // }
  /*registerUser(registerRequest: Employee, httpOptions?: any) {
    return this.http.post<Employee[]>(`${this.apiBaseUrl}/api/user/add`, registerRequest);
  }

  public login(authRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>(`${this.apiBaseUrl}/user/authenticate`, authRequest);
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.apiBaseUrl}/verify`, verificationRequest);
  } */