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
  
  constructor() { }
}
