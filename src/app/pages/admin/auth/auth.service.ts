import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // EL METODO DE ABAJO ES PARA CREAR NUEVOS USUARIOS

  // singIn(email: string, password: string) {
  //   return this.http.post<AuthResponseData>(
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1teg4VZ9y_FJVaOXNcKhDJShjd4gZTdE',
  //     {
  //       email: email,
  //       password: password,
  //       returnSecureToken: true,
  //     }
  //   );
  // }

  login(email: string, password: string) {
    //METODO PARA COMPROBAR SI ES EL ADMIN

    return this.http.post<AuthResponseData>(

      
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA1teg4VZ9y_FJVaOXNcKhDJShjd4gZTdE',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
      
    );
   
  }

  hadleError() {
    console.log("log del error")
  }
}
