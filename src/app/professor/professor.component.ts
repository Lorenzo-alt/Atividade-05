import { Component, OnInit } from '@angular/core';
import { Professor } from './Professor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent {
  professores = [
    new Professor('Hamilton Machiti da Costa', 35, 'SASA213'),
    new Professor('Keity Yamamoto', 35, 'DASD432'),
    new Professor('Igor Moreira Félix', 35, 'KUJG966'),
    new Professor('José Carmino Gomes Junior', 35, 'DFSS528'),
    new Professor('Robson Calvetti', 35, 'MIOD156'),
  ]
}
