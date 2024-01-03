import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { TicTacToeService } from './shared/tic-tac-toe.service';

@NgModule({
  declarations: [
    TicTacToeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TicTacToeComponent
  ],
  providers: [
    TicTacToeService
  ]
})
export class TicTacToeModule {}
