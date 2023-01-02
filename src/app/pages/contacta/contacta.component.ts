import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';



@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.css']
})
export class ContactaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    
    emailjs.sendForm('service_j6n2b7k', 'template_bo3qbob', e.target as HTMLFormElement, 'JcZaAv_MqGs2yEZQE')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error.text);
      });
  }
}