import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../model/club.model';
import { Ligue } from '../model/ligue.model';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-update-club',
  imports: [FormsModule, DatePipe],
  templateUrl: './update-club.html'
})
export class UpdateClub implements OnInit {
  currentClub = new Club();
  ligues!: Ligue[];
  updatedLigueId!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private clubService: ClubService) { }

  ngOnInit() {
    this.ligues = this.clubService.listeLigues();
    this.currentClub =
      this.clubService.consulterClub(this.activatedRoute.snapshot.params['id']);
    this.updatedLigueId = this.currentClub.ligue.idLigue;
  }

  updateClub() {
    this.currentClub.ligue = this.clubService.consulterLigue(this.updatedLigueId);
    this.clubService.updateClub(this.currentClub);
    this.router.navigate(['clubs']);
  }
}