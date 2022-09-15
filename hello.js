const hello = (name) => {
    console.log('Hi there, ' + name + '!');
}

const anotherHello = (name) => {
    return `Hi there, ${name}!`;
}

module.exports = hello;
module.exports = anotherHello;