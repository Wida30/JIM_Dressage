import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  signupForm:FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      "username": new FormControl(null),
      "email": new FormControl("email", [Validators.required, Validators.email]),
      "phone": new FormControl(null, [Validators.required, Validators.minLength(9)]),
      "message": new FormControl(null)
    })

    

   }

  ngOnInit(): void {

    


  }


  onSubmit(){
    console.log(this.signupForm)
  }


}
