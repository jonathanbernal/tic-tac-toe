import Gameboard from '../src/Gameboard.js';
import Player from '../src/Player.js';

describe('Tests for the Gameboard object', ()=>{
    // initialize Gameboard
    const gameboard = Gameboard();

    test('Gameboard should create a 9x9 grid', ()=>{
        expect(gameboard.getBoard().reduce((accumulator, row)=>accumulator + row.length, 0)).toBe(9);
    });
    test('Placing a mark in a cell should contain the mark', ()=>{
        const testPlayer = Player('Player1', 'X');
        // The gameboard contains a private map that maps single number positions
        // to 2D array coordinates in the form (x,y).
        const positionToPlaceMarkIn = 5;
        gameboard.placePlayerMark(testPlayer.getMark(), positionToPlaceMarkIn);
        expect(gameboard.getBoard()[1][1].getMark()).toBe('X');
    });
    test('Placing a mark on the 4th position should be successful', ()=>{
        const testPlayer = Player('Player3', 'O');
        const positionToPlaceMarkIn = 4;
        expect(gameboard.placePlayerMark(testPlayer.getMark(), positionToPlaceMarkIn))
            .toBe(true);
    });
    test('Placing another mark again on the 4th position should not be successful', ()=>{
        const testPlayer = Player('Player1', 'X');
        const positionToPlaceMarkIn = 4;
        expect(gameboard.placePlayerMark(testPlayer.getMark(), positionToPlaceMarkIn))
            .toBe(false);
    });
    test('The argument cell should be empty (1-9)', ()=>{
        expect(gameboard.isCellAtPositionEmpty(1)).toBe(true);
    });
    test('The last cell should be empty', ()=>{
        expect(gameboard.isCellAtPositionEmpty(9)).toBe(true);
    });
    test('5th cell should not be empty from previous test', ()=>{
        expect(gameboard.isCellAtPositionEmpty(5)).toBe(false);
    });
});