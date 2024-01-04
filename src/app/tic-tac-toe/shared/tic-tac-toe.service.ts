import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private readonly SIZE_BOARD: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: any;
  private numActions!: number;
  private victory: any;

  private _player!: number;
  private _showStart?: boolean;
  private _showBoard?: boolean;
  private _showEnd?: boolean

  constructor() {}

  starter(): void {
    this._showStart = true;
    this._showBoard = false;
    this._showEnd = false;
    this.numActions = 0;
    this.victory = false;
    this.startBoard();
  }

  startBoard(): void {
    this.board = [this.SIZE_BOARD];
    for (let i = 0; i < this.SIZE_BOARD; i++) {
      this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY]
    }
  }

  get showStart(): boolean | undefined {
    return this._showStart;
  }

  get showBoard(): boolean | undefined {
    return this._showBoard;
  }

  get showEnd(): boolean | undefined {
    return this._showEnd;
  }

  get player(): number | undefined {
    return this._player;
  }

  startGame(): void {
    this._showStart = false;
    this._showBoard = true;
  }

  play(positionX: number, positionY: number): void {
    if (this.board[positionX][positionY] !== this.EMPTY ||
      this.victory) {
      return;
    }

    this.board[positionX][positionY] = this._player;
    this.numActions++;
    this.victory = this.endGame(positionX, positionY, this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;

    if (!this.victory && this.numActions < 9) {
      this.cpuPlayer();
    }

    if (this.victory !== false) {
      this._showEnd = true;
    }

    if (!this.victory && this.numActions === 9) {
      this._player = 0;
      this._showEnd = true;
    }
  }

  endGame(line: number, column: number, board: any, player: number): boolean {
    let end: any = false;

    if (board[line][0] === player &&
      board[line][1] === player &&
      board[line][2] === player) {
      end = [[line, 0], [line, 1], [line, 2]];
    }

    if (board[0][column] === player &&
      board[1][column] === player &&
      board[2][column] === player) {
      end = [[0, column], [1, column], [2, column]];
    }

    if (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) {
      end = [[0, 0], [1, 1], [2, 2]];
    }

    if (board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player) {
      end = [[0, 2], [1, 1], [2, 0]];
    }

    return end;
  }

  cpuPlayer(): void {
    let move: number[] = this.getMove(this.O);

    if (move.length <= 0) {
      move = this.getMove(this.X);
    }

    if (move.length <= 0) {
      let moves: any = [];
      for (let i = 0; i < this.SIZE_BOARD; i++) {
        for (let j = 0; j < this.SIZE_BOARD; j++) {
          if (this.board[i][j] === this.EMPTY) {
            moves.push([i, j]);
          }
        }
      }
      let k = Math.floor((Math.random() * (moves.length - 1)));
      move = [moves[k][0], moves[k][1]];
    }

    this.board[move[0]][move[1]] = this._player;
    this.numActions++;
    this.victory = this.endGame(move[0], move[1],
      this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;
  }

  getMove(player: number): number[] {
    let board = this.board;
    for (let line = 0; line < this.SIZE_BOARD; line++) {
      for (let col = 0; col < this.SIZE_BOARD; col++) {

        if (board[line][col] !== this.EMPTY) {
          continue;
        }

        board[line][col] = player;

        if (this.endGame(line, col, board, player)) {
          return [line, col];
        }

        board[line][col] = this.EMPTY;
      }
    }
    return [];
  }

  showX(positionX: number, positionY: number): boolean {
    return this.board[positionX][positionY] === this.X;
  }

  showO(positionX: number, positionY: number): boolean {
    return this.board[positionX][positionY] === this.O;
  }

  showVictory(positionX: number, positionY: number): boolean {
    let showVictory: boolean = false;

    if (!this.victory) {
      return showVictory;
    }

    for (let position of this.victory) {
      if (position[0] === positionX && position[1] === positionY) {
        showVictory = true;
        break;
      }
    }

    return showVictory;
  }

  newGame(): void {
    this.starter();
    this._showStart = false;
    this._showEnd = false;
    this._showBoard = true;
  }
}
