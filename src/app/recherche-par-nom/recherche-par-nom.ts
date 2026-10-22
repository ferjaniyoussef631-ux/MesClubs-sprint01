import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Club } from '../model/club.model';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [DatePipe],
  templateUrl: './recherche-par-nom.html'
})
export class RechercheParNom implements OnInit {
  clubs!: Club[];
  allClubs!: Club[];

  constructor(private clubService: ClubService) { }

  ngOnInit(): void {
    this.allClubs = this.clubService.listeClubs();
    this.clubs = this.allClubs;
  }

  onKeyUp(filterText: string) {
    this.clubs = this.allClubs.filter(item =>
      item.nomClub!.toLowerCase().includes(filterText.toLowerCase()));
  }
}