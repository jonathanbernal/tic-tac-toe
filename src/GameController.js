import Gameboard from './Gameboard.js';
import Player from './Player.js';

const GameController = function () {
    const players = [];
    const gameBoard = Gameboard();
    let currentPlayer;

    const playRound = () => {
        console.log(`It is ${currentPlayer.getName()}'s turn.`);
        const playerCellChoice = currentPlayer.play();
        gameBoard.placePlayerMark(currentPlayer, playerCellChoice);
    };

    const calculateWinner = () => {

    }

    const switchCurrentPlayer = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };

    const createPlayers = (player1Name, player1Mark, player2Name, player2Mark) => {
        const player1 = new Player(player1Name, player1Mark);
        const player2 = new Player(player2Name, player2Mark);

        players.push(player1, player2);
    }
};

export default GameController;