import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'] 
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      municipio: [''],
      mail: [''],
      ciudad: [''],
      estado: [''],
      programaEducativo: ['']
    });
  }

  // Método para enviar los datos por WhatsApp
  sendWhatsApp() {
    console.log('hola');
    const numeroWhatsApp = '4421499781'; // Reemplaza con el número deseado
    const mensaje = `Nombre: ${this.contactForm.value.nombre}\n` +
                    `Teléfono: ${this.contactForm.value.telefono}\n` +
                    `Municipio: ${this.contactForm.value.municipio}\n` +
                    `Mail: ${this.contactForm.value.mail}\n` +
                    `Ciudad: ${this.contactForm.value.ciudad}\n` +
                    `Estado: ${this.contactForm.value.estado}\n` +
                    `Programa Educativo: ${this.contactForm.value.programaEducativo}`;
    
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;

    // Redirigir a WhatsApp
    window.open(url);
  }

}
