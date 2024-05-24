import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../../services/app.auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  username: string = '';

  constructor(private authService: AppAuthService) {}
  
  ngOnInit(): void {
    this.authService.useraliasObservable.subscribe(name => {
      this.username = name;
      console.log(name);
    });
  }

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  login() {
    this.authService.login();
  }
}
