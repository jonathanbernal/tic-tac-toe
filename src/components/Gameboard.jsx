import Tile from "./Tile";
import { useState } from "react";

export default function Gameboard({ gameboardState }) {
    return (
        <div className="gameboard">
            <Tile>{ gameboardState[0] }</Tile>
            <Tile>{ gameboardState[1] }</Tile>
            <Tile>{ gameboardState[2] }</Tile>
            <Tile>{ gameboardState[3] }</Tile>
            <Tile>{ gameboardState[4] }</Tile>
            <Tile>{ gameboardState[5] }</Tile>
            <Tile>{ gameboardState[6] }</Tile>
            <Tile>{ gameboardState[7] }</Tile>
            <Tile>{ gameboardState[8] }</Tile>
        </div>
    )
}