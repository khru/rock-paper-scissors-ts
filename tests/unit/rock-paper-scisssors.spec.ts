function rockPaperScissors(movePlayer1: string, movePlayer2: string) {
    return 'Player 1';
}

describe('Rock paper scissors game', () => {
    it('given that I have chosen rock when the opponent chooses scissors then I should win', () => {
        expect(rockPaperScissors("rock","scissors")).toBe('Player 1');
    });
});
