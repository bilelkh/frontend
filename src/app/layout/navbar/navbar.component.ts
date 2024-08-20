import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAuth: boolean = false;
  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isAuth = this.authService.checkUserIsConnected();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('auth/login');
  }
}
