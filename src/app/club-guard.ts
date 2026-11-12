import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const clubGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Seul un utilisateur ADMIN peut accéder à la route protégée
  if (authService.isAdmin()) {
    return true;
  }

  // Sinon, redirection vers la page « non autorisé »
  router.navigate(['app-forbidden']);
  return false;
};