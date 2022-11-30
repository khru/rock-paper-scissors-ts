import { Moves } from './moves';
import { GameWinner } from './game-winner';

const winMovements = {
    [Moves.ROCK]: Moves.PAPER,
    [Moves.PAPER]: Moves.SCISSORS,
    [Moves.SCISSORS]: Moves.ROCK,
}

export function rockPaperScissors(movePlayer1: Moves, movePlayer2: Moves) {

    if (movePlayer1 === movePlayer2) {
        return GameWinner.DRAW;
    }

    if (winMovements[movePlayer1] === movePlayer2) {
        return GameWinner.PLAYER_2;
    }

    return GameWinner.PLAYER_1;

}
