import { Routes } from '@angular/router';
import { Clubs } from './clubs/clubs';
import { AddClub } from './add-club/add-club';
import { UpdateClub } from './update-club/update-club';
import { RechercheParLigue } from './recherche-par-ligue/recherche-par-ligue';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { RecherchePipe } from './recherche-pipe/recherche-pipe';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { clubGuard } from './club-guard';

export const routes: Routes = [
  { path: "clubs", component: Clubs },
  { path: "add-club", component: AddClub, canActivate: [clubGuard] },
  { path: "updateClub/:id", component: UpdateClub, canActivate: [clubGuard] },
  { path: "rechercheParLigue", component: RechercheParLigue },
  { path: "rechercheParNom", component: RechercheParNom },
  { path: "recherchePipe", component: RecherchePipe },
  { path: "login", component: Login },
  { path: "app-forbidden", component: Forbidden },
  { path: "", redirectTo: "clubs", pathMatch: "full" }
];