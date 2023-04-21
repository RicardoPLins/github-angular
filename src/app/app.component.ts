import { Component } from '@angular/core';
import {Jogadores} from './model/jogadores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeiro-angular-jogadores';

  jogadorDeManutencao: Jogadores;
  jogadores: Array<Jogadores>;
  constructor() {
    this.jogadorDeManutencao = new Jogadores('', 0);
    this.jogadores = [
      new Jogadores('Lebron James', 6, 'Los Angeles Lakers'),
      new Jogadores('Stephen Curry', 30, 'Golden State Warrior'),
      new Jogadores('JA MORANT', 12, 'Memphis Grizzlies')
    ];
  }

  cadastrar(): void {
    this.jogadores.push(this.jogadorDeManutencao);
    this.jogadorDeManutencao = new Jogadores();
  }

  excluir(jogadorARemover: Jogadores): void {
    const indx = this.jogadores.findIndex(usuario =>
      usuario.nome === jogadorARemover.nome);

    this.jogadores.splice(indx, 1);
  }

  editar(jogador: Jogadores): void {
    this.jogadorDeManutencao = jogador;
  }
}
