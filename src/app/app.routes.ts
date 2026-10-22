import { Routes } from '@angular/router';
import { Clubs } from './clubs/clubs';
import { AddClub } from './add-club/add-club';
import { UpdateClub } from './update-club/update-club';
import { RechercheParLigue } from './recherche-par-ligue/recherche-par-ligue';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { RecherchePipe } from './recherche-pipe/recherche-pipe';

export const routes: Routes = [
  { path: "clubs", component: Clubs },
  { path: "add-club", component: AddClub },
  { path: "updateClub/:id", component: UpdateClub },
  { path: "rechercheParLigue", component: RechercheParLigue },
  { path: "rechercheParNom", component: RechercheParNom },
  { path: "recherchePipe", component: RecherchePipe },
  { path: "", redirectTo: "clubs", pathMatch: "full" }
];