import { rockPaperScissors } from '../../src/rock-paper-scissor';
import { Moves } from '../../src/moves';
import { GameWinner } from '../../src/game-winner';


describe('Rock paper scissors game', () => {
    it.each([
        [Moves.ROCK, Moves.SCISSORS, GameWinner.PLAYER_1],
        [Moves.SCISSORS, Moves.ROCK, GameWinner.PLAYER_2],
        [Moves.PAPER, Moves.ROCK, GameWinner.PLAYER_1],
        [Moves.ROCK, Moves.PAPER, GameWinner.PLAYER_2],
        [Moves.SCISSORS, Moves.PAPER, GameWinner.PLAYER_1],
        [Moves.PAPER, Moves.SCISSORS, GameWinner.PLAYER_2],
        [Moves.ROCK, Moves.ROCK, GameWinner.DRAW],
        [Moves.SCISSORS, Moves.SCISSORS, GameWinner.DRAW],
        [Moves.PAPER, Moves.PAPER, GameWinner.DRAW],
    ])('when I play %s and the opponent plays %s the %s should win', (myMove: Moves, opponentMove: Moves, expectedWinner: GameWinner) => {
        const actualWinner = rockPaperScissors(myMove, opponentMove);
        expect(actualWinner).toBe(expectedWinner);
    });
});
