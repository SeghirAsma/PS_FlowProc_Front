import { Role } from "./Role";

export interface AuthenticationRequest {
    email?: string;
    password?: string;
    role?: Role;
    token?:string
  }