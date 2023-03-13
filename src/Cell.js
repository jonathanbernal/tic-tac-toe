const Cell = function () {
    let mark;

    const addMark = (playerMark) => {
        mark = playerMark;
    }

    const getMark = () => mark;

    return {addMark, getMark};
}

export default Cell;