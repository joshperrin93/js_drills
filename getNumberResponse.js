const getNumberResponse = number => {
    if (number === 0) {
        return 'zero';
    } else if (number > 0) {
        return 'postive';
    } else {
        return 'negative';
    }
}

module.exports = getNumberResponse