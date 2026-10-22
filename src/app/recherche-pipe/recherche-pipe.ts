import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Club } from '../model/club.model';
import { ClubService } from '../services/club.service';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@Component({
  selector: 'app-recherche-pipe',
  imports: [FormsModule, DatePipe, SearchFilterPipe],
  templateUrl: './recherche-pipe.html'
})
export class RecherchePipe implements OnInit {
  clubs!: Club[];
  searchTerm: string = '';

  constructor(private clubService: ClubService) { }

  ngOnInit(): void {
    this.clubs = this.clubService.listeClubs();
  }
}