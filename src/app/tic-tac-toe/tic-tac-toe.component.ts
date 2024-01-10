import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from './shared/tic-tac-toe.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor(private service: TicTacToeService) {}

  ngOnInit(): void {
    this.service.starter();
  }

  get showStart(): boolean {
    return this.service.showStart;
  }

  get showBoard(): boolean {
    return this.service.showBoard;
  }

  get showEnd(): boolean {
    return this.service.showEnd;
  }

  get player(): number {
    return this.service.player;
  }

  startGame(): void {
    this.service.startGame();
  }

  play(positionX: number, positionY: number): void {
    this.service.play(positionX, positionY);
  }

  showX(positionX: number, positionY: number): boolean {
    return this.service.showX(positionX, positionY);
  }

  showO(positionX: number, positionY: number): boolean {
    return this.service.showO(positionX, positionY);
  }

  showVictory(positionX: number, positionY: number): boolean {
    return this.service.showVictory(positionX, positionY);
  }

  newGame(): void {
    this.service.newGame();
  }
}
