function rockPaperScissors(movePlayer1: string, movePlayer2: string) {
    if (movePlayer1 == 'rock') {
        return 'Player 1';
    }
    return 'Player 2';
}

describe('Rock paper scissors game', () => {
    it('given that I have chosen rock when the opponent chooses scissors then I should win', () => {
        const actualWinner = rockPaperScissors("rock","scissors");
        const expectedWinner = 'Player 1';
        expect(actualWinner).toBe(expectedWinner);
    });

    it('given that I have chosen scissors when the opponent chooses rock then the opponent should win', () => {
        const actualWinner = rockPaperScissors("scissors","rock");
        const expectedWinner = 'Player 2';
        expect(actualWinner).toBe(expectedWinner);
    });
});
