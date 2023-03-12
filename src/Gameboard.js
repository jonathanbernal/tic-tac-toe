import Cell from './Cell';

const Gameboard = function () {
    const ROW_SIZE = 3;
    const COLUMN_SIZE = 3;
    let board = [];

    const positionMap = {
        1: {x:0, y:0},
        2: {x:0, y:1},
        3: {x:0, y:2}, 
        4: {x:1, y:0},
        5: {x:1, y:1},
        6: {x:1, y:2},
        7: {x:2, y:0},
        8: {x:2, y:1},
        9: {x:2, y:2},
    }
    
    const initializeBoard = () => {
        for (let row = 0; row < ROW_SIZE; row += 1) {
            board[row] = [];
            for (let col = 0; col < COLUMN_SIZE; col += 1) {
                board[row].push(Cell());
            }
        }
    };

    const getBoard = () => board;

    /*
       To make it easier for the player to remember the positions,
       we ask the player for a position between 1 and 9 and we
       take it from there.
    */
    const placePlayerMark = (player, cellPosition) => {
        board[positionMap[1].x][positionMap[1].y].addMark(player.getMark());
    };

    const printBoard = () => {
        const boardString = ""
        for(let row = 0; row < ROW_SIZE; row += 1) {
            board[row].map((cell) => boardString += cell.getMark());
            boardString += "\n";
        };

        console.log(boardString);
    }

    return {getBoard, placePlayerMark, printBoard};
}

export {Gameboard};