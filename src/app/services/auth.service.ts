import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Utilisateurs de test (en dur, comme dans l'atelier)
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'user', password: '123', roles: ['USER'] },
  ];

  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];

  constructor(private router: Router) {
    // Restauration de la session au démarrage (avant les guards)
    const logged = localStorage.getItem('isloggedIn');
    const user = localStorage.getItem('loggedUser');
    if (logged === 'true' && user) {
      this.setLoggedUserFromLocalStorage(user);
    }
  }

  // Vérifie le login / mot de passe et ouvre la session
  signIn(user: User): boolean {
    const found = this.users.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (!found) return false;

    this.loggedUser = found.username;
    this.isloggedIn = true;
    this.roles = found.roles;
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    return true;
  }

  // Ferme la session et redirige vers la page de login
  logout(): void {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  // Retourne true si l'utilisateur connecté a le rôle ADMIN
  isAdmin(): boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('ADMIN') > -1;
  }

  // Restaure l'utilisateur connecté à partir du localStorage
  setLoggedUserFromLocalStorage(login: string): void {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  // Retrouve les rôles d'un utilisateur à partir de son login
  getUserRoles(username: string): void {
    const found = this.users.find((u) => u.username === username);
    if (found) this.roles = found.roles;
  }
}