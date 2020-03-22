module.exports = function repeater(str, options) {
    const {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
    } = options;

    const additionStr = Array(additionRepeatTimes).fill(addition).map(str => '' + str).join(additionSeparator);
    return Array(repeatTimes).fill(str).map(str => '' +str + additionStr).join(separator);
};
  