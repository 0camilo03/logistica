import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  frmControllers: FormGroup;

  constructor() { 
    this.frmControllers = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      descripcion: new FormControl('', Validators.required)
    });
  }


  ngOnInit() {}

  contacto() {
    console.log(this.frmControllers.value);
    this.frmControllers.reset();
    // Simular envío de formulario
    alert('Enviado ');
  }

}
