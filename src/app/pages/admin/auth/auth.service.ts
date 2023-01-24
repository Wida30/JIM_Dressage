

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
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

  user = new Subject<User>();

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
      
    ).pipe(
      catchError(errorRes => {
        let errorMessage = 'No estas autorizado';
        return throwError (errorMessage)
      }),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
      
    );
   
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  

  
}
