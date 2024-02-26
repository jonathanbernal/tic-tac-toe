/**
 * The GameController component is the main component of the application and is responsible
 * for managing the state of the game.
 * 
 * Author: Jonathan Bernal
 * Date: 01-28-2024
 */
import { useState } from 'react'
import '../GameController.css'
import PlayerSetup from './PlayerSetup';
import Gameboard from './Gameboard';

export default function GameController() {
  const [isGameReady, setIsGameReady] = useState( false ); // Game is ready once both players have selected their name and mark
  const [gameboardState, setGameboardState] = useState( Array(9) );
  const Players = []; // PlayerSetup is responsible for instantiating the players
  const winningCombinations = [
    // horizontal combinations
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical combinations
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal combinations always check from top to bottom
    [0, 4, 8],
    [2, 4, 6],
  ];

  return (
    <div>
        { !isGameReady && <PlayerSetup players={ Players }/> }
        { isGameReady && <Gameboard gameboardState={ gameboardState }/> }
    </div>
  )
}

