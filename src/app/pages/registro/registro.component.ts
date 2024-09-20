import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {
  frmControllers: FormGroup;

  constructor() { 
    this.frmControllers = new FormGroup({
      nombre:new FormControl('', Validators.required),
      apellido:new FormControl('', Validators.required),
      correo:new FormControl('', [Validators.required, Validators.email]),
      contrasena:new FormControl('', Validators.required),
      confirmarContrasena:new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  registrar() {
    console.log(this.frmControllers.value);
  }

}
