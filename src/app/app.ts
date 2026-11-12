import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html'
})
export class App implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Si l'utilisateur n'est pas connecté, on le redirige vers la page de login
    if (!this.authService.isloggedIn) {
      this.router.navigate(['/login']);
    }
  }

  onLogout(): void {
    this.authService.logout();
  }
}