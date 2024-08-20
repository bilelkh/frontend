import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  email: string = '';
  isConnected: boolean = false;
  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this.authService.checkUserIsConnected();
    if (this.isConnected)
    this.getConnectedUser();
  }

  getConnectedUser() {
    this.authService.getConnectUser().subscribe((user: {
      email: string;
      _id: string;
    }) => {
     this.email = user.email;
    }, (error:Error) => {
      console.log(error);
    })
  }

  navigateToLogin() {
    console.log('navigateToLogin');
    this.router.navigateByUrl('auth/login');
  }

  logout() {
    this.isConnected = false;
    this.authService.logout();
    this.router.navigateByUrl('auth/login');
  }
}
