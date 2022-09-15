class UserBase {

    constructor(users) {
        this.users = users
    }

    count() {
        return this.users.length
    }

    getNames() {
        this.users.map(user => {
            console.log(user.name)
        })
    }

    getIntroductions() {
        this.users.map(user => {
            console.log(`Hi, my name is ${user.name}`);
        })
    }
}

module.exports = UserBase