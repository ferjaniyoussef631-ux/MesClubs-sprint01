import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {
  user = new User();
  erreur = 0;

  constructor(private authService: AuthService, private router: Router) {}

  // Appelée au clic sur le bouton « Connexion »
  onLoggedin() {
    const isValidUser: boolean = this.authService.signIn(this.user);
    if (isValidUser) {
      this.router.navigate(['/clubs']);
    } else {
      this.erreur = 1;
    }
  }
}