import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Programação WEB III';
  logo = "favicon.ico";
  exibe = true;

  exibirNome(){
    return 'Bruno e Marcos';
  }

  exibirAlerta(){
    alert("Hoje vou adotar um anao!");
  }

  hideInformacoes(){
    if(this.exibe == false){
      this.exibe = true;
    }
    else if(this.exibe == true){
      this.exibe = false;
    }
  }
}
