
enum GameWinner {
    PLAYER_1 = 'Player 1',
    PLAYER_2 = 'Player 2'
}

enum Moves {
    ROCK = 'Rock',
    PAPER = 'Paper',
    SCISSORS = 'Scissors',
}

function rockPaperScissors(movePlayer1: Moves, movePlayer2: Moves) {

    if (movePlayer1 === Moves.ROCK && movePlayer2 === Moves.PAPER) {
        return GameWinner.PLAYER_2;
    }

    if (movePlayer1 === Moves.SCISSORS && movePlayer2 === Moves.PAPER) {
        return GameWinner.PLAYER_1;
    }

    if (movePlayer1 === Moves.ROCK && movePlayer2 === Moves.SCISSORS) {
        return GameWinner.PLAYER_1;
    }

    if (movePlayer1 === Moves.PAPER && movePlayer2 === Moves.ROCK) {
        return GameWinner.PLAYER_1;
    }

    return GameWinner.PLAYER_2;
}

describe('Rock paper scissors game', () => {
    it.each([
        [Moves.ROCK, Moves.SCISSORS, GameWinner.PLAYER_1],
        [Moves.SCISSORS, Moves.ROCK, GameWinner.PLAYER_2],
        [Moves.PAPER, Moves.ROCK, GameWinner.PLAYER_1],
        [Moves.ROCK, Moves.PAPER, GameWinner.PLAYER_2],
        [Moves.SCISSORS, Moves.PAPER, GameWinner.PLAYER_1],
    ])('when I play %s and the opponent plays %s the %s', (myMove: Moves, opponentMove: Moves, expectedWinner: GameWinner) => {
        const actualWinner = rockPaperScissors(myMove, opponentMove);
        expect(actualWinner).toBe(expectedWinner);
    });
});
