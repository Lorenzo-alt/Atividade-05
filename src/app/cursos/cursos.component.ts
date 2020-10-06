import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos = [
    new Curso('Lógica de programação').nome,
    new Curso('Banco de dados').nome,
    new Curso('Analise de sistemas').nome,
    new Curso('Engenharia de software').nome,
    new Curso('Desenvolvimento Web').nome,
    new Curso('Game Designer').nome,
    new Curso('Matematica').nome
  ]
}
