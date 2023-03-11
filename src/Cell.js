const Cell = function () {
    let mark = "";

    const addMark = (player) => {
        mark = player.getMark();
    }

    const getMark = () => mark;

    return {addMark, getMark};
}

export {Cell};