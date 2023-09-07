import Gameboard from './Gameboard.js';
import Player from './Player.js';

const GameController = function () {
    const players = [];
    const gameBoard = Gameboard();
    const positionMap = gameBoard.positionMap;
    let currentPlayer;

    const isPositionValid = (position) => typeof(position) === 'number' && (position >=1 && position <= 9);

    const queryMarksAtPositions = (positionsArray) => {
        if(positionsArray.length !== 3) {
            throw Error('Error at queryMarksAtPositions. Argument size must be exactly 3');
        }
        return [
            gameBoard.getMarkAtPosition(positionsArray[0]),
            gameBoard.getMarkAtPosition(positionsArray[1]),
            gameBoard.getMarkAtPosition(positionsArray[2])
        ]
    }

    const didCurrentPlayerWin = () => {
        const currentBoard = gameBoard.getBoard();
        const currentPlayerMark = currentPlayer.getMark();
        let playerWonFlag = false;

        // In order to determine a winner, the rows, columns,
        // and diagonals need to be checked.
        // Row check:

    }

    const switchCurrentPlayer = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };

    const createPlayers = (player1Name, player1Mark, player2Name, player2Mark) => {
        const player1 = Player(player1Name, player1Mark);
        const player2 = Player(player2Name, player2Mark);

        players.push(player1, player2);
    }

    const playRound = () => {
        let isPositionInputValid = false;
        let playerPlacedMarkOnGameboard = false;

        console.log(`It is ${currentPlayer.getName()}'s turn.`);
        let currentPlayerPositionPromptResult = prompt('Choose a position: (1-9)');
        let currentPlayerPositionChoice = parseInt(currentPlayerPositionPromptResult);
        const currentPlayerMark = currentPlayer.getMark();

        isPositionInputValid = isPositionValid(currentPlayerPositionChoice);

        while (!isPositionInputValid) {
            currentPlayerPositionPromptResult = prompt('You entered an invalid position. Try again with a value between 1 and 9');
            currentPlayerPositionChoice = parseInt(currentPlayerPositionPromptResult);

            isPositionInputValid = isPositionValid(currentPlayerPositionChoice);
        }

        // Try to place the mark at the specified position, if not possible, prompt
        // the user for a new position until a valid, empty position is entered.
        playerPlacedMarkOnGameboard = gameBoard.placePlayerMark(currentPlayerMark, currentPlayerPositionChoice);
        
        while (!playerPlacedMarkOnGameboard) {
            currentPlayerPositionPromptResult = prompt(`Position ${currentPlayerPositionChoice} is not empty. Try again.`);
            currentPlayerPositionChoice = parseInt(currentPlayerPositionPromptResult);

            playerPlacedMarkOnGameboard = gameBoard.placePlayerMark(currentPlayerMark, currentPlayerPositionChoice);
        }

        gameBoard.printBoard();   

        // determine winning conditions here.
    };

    const startGame = () => {
        const player1Name = prompt('Enter the first player\'s name', 'Player1');
        const player1Mark = prompt('What mark do you want? X or O', '');
        const player2Name = prompt('Enter the second player\'s name', 'COM');
        const player2Mark = player1Mark === 'X' ? 'O' : 'X';

        let continueGame = true;

        createPlayers(player1Name, player1Mark, player2Name, player2Mark);

        while(continueGame) {
            switchCurrentPlayer(); // this sets up the turn for player 1;
            playRound();
        }
    }

    return {startGame}
};

export default GameController;