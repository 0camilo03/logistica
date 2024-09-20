import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  frmLogin: FormGroup;

  constructor() { 
    this.frmLogin = new FormGroup({
      correo:new FormControl('', [Validators.required, Validators.email]),
      contrasena:new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}
  
  login() {
    console.log(this.frmLogin.value);
  }

}
