
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService] // Se declarar aqui sera criada uma instancia exclusiva para esse Component
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(_cursosService: CursosService) {
    //this.cursosService = new CursosService();
    this.cursosService = _cursosService;
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(
       curso => this.cursos.push(curso)
    );
  }

}
