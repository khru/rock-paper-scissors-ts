
enum Players {
    PLAYER_1,
    PLAYER_2
}

enum Moves {
    ROCK,
    PAPER,
    SCISSORS,
}

function rockPaperScissors(movePlayer1: Moves, movePlayer2: Moves) {
    if (movePlayer1 == Moves.ROCK) {
        return Players.PLAYER_1;
    }

    if (movePlayer1 === Moves.PAPER) {
        return Players.PLAYER_1;
    }

    return Players.PLAYER_2;
}

describe('Rock paper scissors game', () => {

    describe('Rock beats Scissors', () => {
        it('given that I have chosen rock when the opponent chooses scissors then I should win', () => {
            const actualWinner = rockPaperScissors(Moves.ROCK, Moves.SCISSORS);
            const expectedWinner = Players.PLAYER_1;
            expect(actualWinner).toBe(expectedWinner);
        });

        it('given that I have chosen scissors when the opponent chooses rock then the opponent should win', () => {
            const actualWinner = rockPaperScissors(Moves.SCISSORS, Moves.ROCK);
            const expectedWinner = Players.PLAYER_2;
            expect(actualWinner).toBe(expectedWinner);
        });
    });

    it('given that I have chosen paper when the opponent chooses rock then I should win', () => {
        const actualWinner = rockPaperScissors(Moves.PAPER, Moves.ROCK);
        const expectedWinner = Players.PLAYER_1;
        expect(actualWinner).toBe(expectedWinner);
    });

    it('given that I have chosen rock when the opponent chooses paper then the opponent should win', () => {
        const actualWinner = rockPaperScissors(Moves.ROCK, Moves.PAPER);
        const expectedWinner = Players.PLAYER_2;
        expect(actualWinner).toBe(expectedWinner);
    });
});
