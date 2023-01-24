import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/pages/admin/auth/auth.service';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  isAuth = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.userSub = this.authService.user.subscribe(user =>{
      this.isAuth =!!user;

    });
  }

  logOut(){

    // this.authService.logOut()
    this.isAuth = false
    console.log("dentro logout");
    this.router.navigate(['nosotros'])
    

  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
