import Player from '../src/Player.js';

describe('tests for Player object', ()=>{
  test('Test player name for Doe', ()=>{
    expect(Player('Doe', 'X').getName()).toEqual('Doe');
  });
  test('Test mark value to be X', ()=>{
    expect(Player('Doe', 'X').getMark()).toEqual('X');
  });
  test('Test to sanitize special characters and mixed letters', ()=>{
    expect(Player('iAmANeWPlayEr', 'X').getName()).toEqual('Iamanewplayer');
  });
  test('Test mark value to be O', ()=>{
    expect(Player('COM', 'O').getMark()).toEqual('O');
  });
  test('Test lowercase marks', ()=>{
    expect(Player('Player1', 'x').getMark()).toEqual('X');
  });
  test('Test lowercase marks', ()=>{
    expect(Player('Player2', 'o').getMark()).toEqual('O');
  });
  // Expressions that throw errors must be wrapped inside functions or Jest
  // will not catch the error and the assertion will fail.
  test('Test to sanitize against special characters', ()=>{
    expect(()=>{ Player('Sonic$ lay3r', 'O') }).toThrow(/Name must not use special characters/);
  });
  test('Test invalid mark argument', ()=>{
    expect(()=>{ Player('Player1', 'Y') }).toThrow(/Invalid mark argument/);
  });
  test('Test invalid long mark argument', ()=>{
    expect(()=>{ Player('Player10', 'Yarn') }).toThrow(/Invalid mark argument/);
  });
});

