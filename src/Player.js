const Player = (name, mark) => {
    const sanitizeMark = (mark) => {
        if (!isMarkValid(mark)) {
            throw Error('Player.sanitizeMark(). Invalid mark argument. Mark must be X or O.');
        }
        return mark.toUpperCase();
    }

    const sanitizeName = (name) => {
        if (!isNameValid(name)) {
            throw Error('Player.sanitizeName(). Invalid name argument. Name must not use special characters.');
        }
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    }

    const isNameValid = (name) => {
        // this regex tests against special characters
        const nameRegex = /(\W|\s)+/;
        // if the name contains special characters, the test is true.
        // Therefore, it is an invalid name for the player object.
        return !nameRegex.test(name);
    }
    
    const isMarkValid = (mark) => {
        const markRegex = /^[X|O]{1}$/i;
        return markRegex.test(mark);
    }

    const setMark = (newMark) => mark = newMark;
    const setName = (newName) => name = newName;
    const getMark = () => mark;
    const getName = () => name;

    // Every Player instantiation calls these methods to make sure
    // the inputs are valid
    setName(sanitizeName(name));
    setMark(sanitizeMark(mark));
    
    return {getMark, getName};
}

export default Player;