
enum GameWinner {
    PLAYER_1 = 'Player 1',
    PLAYER_2 = 'Player 2',
    DRAW = "Draw",
}

enum Moves {
    ROCK = 'Rock',
    PAPER = 'Paper',
    SCISSORS = 'Scissors',
}

const winMovements = {
    [Moves.ROCK]: Moves.PAPER,
    [Moves.PAPER]: Moves.SCISSORS,
    [Moves.SCISSORS]: Moves.ROCK,
}

function rockPaperScissors(movePlayer1: Moves, movePlayer2: Moves) {

    if (winMovements[movePlayer1] === movePlayer2) {
        return GameWinner.PLAYER_2;
    }

    return GameWinner.PLAYER_1;

}

describe('Rock paper scissors game', () => {
    it.each([
        [Moves.ROCK, Moves.SCISSORS, GameWinner.PLAYER_1],
        [Moves.SCISSORS, Moves.ROCK, GameWinner.PLAYER_2],
        [Moves.PAPER, Moves.ROCK, GameWinner.PLAYER_1],
        [Moves.ROCK, Moves.PAPER, GameWinner.PLAYER_2],
        [Moves.SCISSORS, Moves.PAPER, GameWinner.PLAYER_1],
        [Moves.PAPER, Moves.SCISSORS, GameWinner.PLAYER_2],
        [Moves.ROCK, Moves.ROCK, GameWinner.DRAW],
    ])('when I play %s and the opponent plays %s the %s', (myMove: Moves, opponentMove: Moves, expectedWinner: GameWinner) => {
        const actualWinner = rockPaperScissors(myMove, opponentMove);
        expect(actualWinner).toBe(expectedWinner);
    });
});
