import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Club } from '../model/club.model';
import { Ligue } from '../model/ligue.model';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-add-club',
  imports: [FormsModule],
  templateUrl: './add-club.html'
})
export class AddClub implements OnInit {
  newClub = new Club();
  ligues!: Ligue[];
  newIdLigue!: number;
  newLigue!: Ligue;

  constructor(private clubService: ClubService,
              private router: Router) { }

  ngOnInit(): void {
    this.ligues = this.clubService.listeLigues();
    this.newIdLigue = this.ligues[0].idLigue;
  }

  addClub() {
    this.newLigue = this.clubService.consulterLigue(this.newIdLigue);
    this.newClub.ligue = this.newLigue;
    this.clubService.ajouterClub(this.newClub);
    this.router.navigate(['clubs']);
  }
}