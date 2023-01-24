import { AuthResponseData, AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
 
  error!: string;

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.login(email, password);

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/administrador'])
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );

    form.reset();
  }

  
}
