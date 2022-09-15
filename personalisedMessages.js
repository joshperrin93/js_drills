const personalisedMessages = (object) => {
    return 'Hi ' + object.name + '! ' + object.discount + '% off our best candies for you today!'
}

const generateMessages = (array) => {
    return array.map(personalisedMessages)
}

module.exports = generateMessages