import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';



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
    console.log(e)

    

    Swal.fire({
      title: 'Gracias por tu mensaje!',
      text: 'Nos pondremos en contacto contigo a la mayor brevedad posible',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })



    
    // emailjs.sendForm('service_j6n2b7k', 'template_bo3qbob', e.target as HTMLFormElement, 'JcZaAv_MqGs2yEZQE')
    //   .then((result: EmailJSResponseStatus) => {
    //     console.log(result.text);
    //   }, (error: any) => {
    //     console.log(error.text);
    //   });
  }
}