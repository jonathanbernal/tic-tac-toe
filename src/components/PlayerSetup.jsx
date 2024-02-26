import { useState } from "react";
import Player from './Player';

export default function PlayerSetup( { players } ) {
    if ( !players ) {
        throw new Error("PlayerSetup error. No player object was provided.");
    }

    return (
        <div>
            <h1>Player 1: What is your name?</h1>
            <input type="text" />
        </div>
    );
}