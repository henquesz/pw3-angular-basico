import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Programação WEB III';
  logo = "favicon.ico";

  cursos : string[] = [];
  curso = "";
  legenda = ""

  addCurso(){
    this.cursos.push(this.curso)
  }
  verificacao(){
    if(this.cursos.length == 0){
      this.legenda = "Não há cursos disponiveis"
    }else if(this.cursos.length >= 0){
      this.legenda = "Há cursos disponiveis!"
    }
    return this.legenda;
  }
}
