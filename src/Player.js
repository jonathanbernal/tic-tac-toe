const Player = (name, mark) => {
    
    const getMark = () => mark;
    const getName = () => name;

    const play = () => {
        let playerChoice = prompt("Choose a cell to place your mark (1-9)", "0");
        return playerChoice;
    }

    return {getMark, getName, play};
}

export default Player;