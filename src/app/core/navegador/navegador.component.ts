import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.userSub = this.authService.user.subscribe(user =>{
      this.isAuth =!!user;

    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
