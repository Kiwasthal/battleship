import Player from '../Player';


beforeEach(() => {
    let player = Player(true,false,'Captain')
    let testBoard = {
        opponentBoard:[],
        receiveShot: jest.fn((loc) => {
            testBoard.opponentBoard[loc] = 'miss'
            return true
        }),
        opponentBoard: jest.fn(() => {
            return testBoard.opponentBoard
        }),
    }
    const arr = [];
    it('creates Player with correct name'), () => {
        expect(player.name).toBe('Captain')
    }
    it('expects player no to be AI',) , () => {
        expect(player.isAi).toBe('false')
    }
})