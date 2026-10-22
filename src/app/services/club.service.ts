import { Injectable } from '@angular/core';
import { Club } from '../model/club.model';
import { Ligue } from '../model/ligue.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  clubs: Club[];
  club!: Club;
  ligues: Ligue[];

  constructor() {
    this.ligues = [
      { idLigue: 1, nomLigue: "Ligue 1" },
      { idLigue: 2, nomLigue: "Ligue 2" }
    ];
    this.clubs = [
      { idClub: 1, nomClub: "Espérance Sportive de Tunis", villeClub: "Tunis", budgetClub: 5000000, dateCreation: new Date("01/15/1919"), ligue: { idLigue: 1, nomLigue: "Ligue 1" } },
      { idClub: 2, nomClub: "Club Africain", villeClub: "Tunis", budgetClub: 3500000, dateCreation: new Date("10/04/1920"), ligue: { idLigue: 1, nomLigue: "Ligue 1" } },
      { idClub: 3, nomClub: "Etoile Sportive du Sahel", villeClub: "Sousse", budgetClub: 3000000, dateCreation: new Date("05/11/1925"), ligue: { idLigue: 1, nomLigue: "Ligue 1" } }
    ];
  }

  listeClubs(): Club[] {
    return this.clubs;
  }

  ajouterClub(c: Club) {
    this.clubs.push(c);
  }

  supprimerClub(c: Club) {
    const index = this.clubs.indexOf(c, 0);
    if (index > -1) {
      this.clubs.splice(index, 1);
    }
  }

  consulterClub(id: number): Club {
    this.club = this.clubs.find(c => c.idClub == id)!;
    return this.club;
  }

  updateClub(c: Club) {
    const index = this.clubs.indexOf(c, 0);
    if (index > -1) {
      this.clubs.splice(index, 1);
      this.clubs.splice(index, 0, c);
    }
  }

  listeLigues(): Ligue[] {
    return this.ligues;
  }

  consulterLigue(id: number): Ligue {
    return this.ligues.find(l => l.idLigue == id)!;
  }

   rechercherParLigue(idLigue: number): Club[] {
    return this.clubs.filter(c => c.ligue.idLigue == idLigue);
  }

  rechercherParNom(nom: string): Club[] {
    return this.clubs.filter(c => (c.nomClub ?? '').toLowerCase().includes(nom.toLowerCase()));
  }
}