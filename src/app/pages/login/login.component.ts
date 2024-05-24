import { Component } from '@angular/core';
import { AppAuthService } from '../../services/app.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService: AppAuthService) { }

  login() {
    this.authService.login();
  }
}
