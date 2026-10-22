import { Ligue } from './ligue.model';

export class Club {
  idClub?: number;
  nomClub?: string;
  villeClub?: string;
  budgetClub?: number;
  dateCreation?: Date;
  ligue!: Ligue;
}