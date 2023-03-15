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

    /**
     * This function checks if the cell at the given position does not have
     * a mark stored in it.
     * @param {*} cellPosition the position between 1 and 9 to check.
     * @returns whether the cell at the indicated position is empty or not.
     */
    const isCellAtPositionEmpty = (cellPosition) => {
        let mark = board[positionMap[cellPosition].x][positionMap[cellPosition].y].getMark();
        return mark === ' ';
    }

    /**
     * 
     * @param {*} playerMark the player's assigned mark
     * @param {*} cellPosition A position value between 1 and 9 on the board to place the mark on.
     * @returns the operation status. True if successful, false otherwise
     */
    const placePlayerMark = (playerMark, cellPosition) => {
        if (isCellAtPositionEmpty(cellPosition)) {
            board[positionMap[cellPosition].x][positionMap[cellPosition].y].addMark(playerMark);
            return true;
        }
        return false;
    };

    const printBoard = () => {
        let boardString = ""
        for(let row = 0; row < ROW_SIZE; row += 1) {
            board[row].map((cell) => boardString += " " + cell.getMark());
            boardString += "\n";
        };

        console.log(boardString);
    }

    const getMarkAtPosition = (position) => {
        return board[positionMap[position].x][positionMap[position].y].getMark();
    }

    const getBoard = () => board;

    initializeBoard();

    return {
        getBoard,
        getMarkAtPosition,
        placePlayerMark,
        printBoard,
        isCellAtPositionEmpty,
        positionMap,
    };
}

export default Gameboard;