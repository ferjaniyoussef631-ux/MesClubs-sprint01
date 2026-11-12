import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Club } from '../model/club.model';
import { ClubService } from '../services/club.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-clubs',
  imports: [DatePipe, RouterLink],
  templateUrl: './clubs.html'
})
export class Clubs implements OnInit {
  clubs: Club[];

  constructor(private clubService: ClubService, public authService: AuthService) {
    this.clubs = clubService.listeClubs();
  }

  ngOnInit(): void {}

  supprimerClub(c: Club) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.clubService.supprimerClub(c);
  }
}