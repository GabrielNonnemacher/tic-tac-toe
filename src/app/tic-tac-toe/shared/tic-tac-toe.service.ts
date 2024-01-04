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
  private numActions?: number;
  private victory: any;

  private _player?: number;
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
}
