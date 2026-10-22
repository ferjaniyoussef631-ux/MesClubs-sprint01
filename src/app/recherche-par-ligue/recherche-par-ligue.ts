import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Club } from '../model/club.model';
import { Ligue } from '../model/ligue.model';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-recherche-par-ligue',
  imports: [FormsModule, DatePipe],
  templateUrl: './recherche-par-ligue.html'
})
export class RechercheParLigue implements OnInit {
  clubs!: Club[];
  ligues!: Ligue[];
  idLigue!: number;

  constructor(private clubService: ClubService) { }

  ngOnInit(): void {
    this.ligues = this.clubService.listeLigues();
  }

  onChange() {
    this.clubs = this.clubService.rechercherParLigue(this.idLigue);
  }
}