import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  checkUserIsConnected(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }









}
