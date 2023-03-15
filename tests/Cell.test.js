import Cell from '../src/Cell.js';
import Player from '../src/Player.js';

const testPlayer = Player('Player1', 'X');
const testCell = Cell();

describe('Tests for the Cell object', ()=>{
    test('New Cell should have an empty mark', ()=>{
        expect(Cell().getMark()).toEqual(' ');
    });
    test('mark prop should be private', ()=>{
        expect(testCell.mark).toBeUndefined();
    });
    test('Calling addMark should set the player\'s mark', ()=>{
        testCell.addMark(testPlayer.getMark());
        expect(testCell.getMark()).toEqual('X');
    });
});