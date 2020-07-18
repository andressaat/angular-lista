import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CursosService } from '../cursos/cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  // providers: [CursosService] //Se declarar aqui, sera usada uma unica instancia para toda a aplicação, caso se repita em outro modulo ainda sim sera uma unica instancia
})
export class CursosModule { }
