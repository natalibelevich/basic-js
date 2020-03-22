module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const numberOfTurns = Math.pow(2, disksNumber) - 1;
    const time = numberOfTurns/ (turnsSpeed / 3600);
    return {turns: numberOfTurns, seconds: time}
};