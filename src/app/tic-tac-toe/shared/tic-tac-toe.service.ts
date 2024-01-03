import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  
  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos?: number;
  private vitoria: any;

  private _jogador?: number;
  private _showInicio?: boolean;
  private _showTabuleiro?: boolean;
  private _showFinal?: boolean
  
  constructor() { }
}
