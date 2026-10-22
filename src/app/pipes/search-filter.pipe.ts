import { Pipe, PipeTransform } from '@angular/core';
import { Club } from '../model/club.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(clubs: Club[], searchTerm: string): Club[] {
    if (!clubs || !searchTerm) {
      return clubs;
    }
    return clubs.filter(c =>
      (c.nomClub ?? '').toLowerCase().includes(searchTerm.toLowerCase()));
  }
}