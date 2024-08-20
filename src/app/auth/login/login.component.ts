import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiUrl = environment.apiUrl;
  constructor(public authService: AuthService,
  ) {

  }

  ngOnInit() {

  }

  login() {
    window.location.href = `${this.apiUrl}/auth/google`;
  }

}



