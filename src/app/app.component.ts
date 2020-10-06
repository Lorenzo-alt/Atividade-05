import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "José";
  idade = 20
  exibirCaixa = false;
  alterarNome(nome) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
  }
  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  adicionar(nomeInput) {
    this.nome = nomeInput.value;
    this.exibirCaixa = true;
  }

}
