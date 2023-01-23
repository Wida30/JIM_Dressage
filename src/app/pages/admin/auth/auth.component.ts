import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogin = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  cambioLogin (){
    this.isLogin =!this.isLogin;
  }

  onSubmit(form: NgForm){
    console.log(form.value);

    const email= form.value.email;
    const password = form.value.password;

    this.authService.login(email, password).subscribe(resData => {
         console.log(resData);
        
       }, error => 
       {
        console.log(error.error.error.message);
       
       });

    // this.authService.singIn(email, password).subscribe(resData => {
    //   console.log(resData);
      
    // }, error => 
    // {console.log(error);
    // });

    form.reset()
  }

 error(){
  console.log(this.error)
 }

}
