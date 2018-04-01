const bcrypt = require('bcrypt');

class Bcrypt {

    constructor() {
        this.saltRounds = 10;
    }

    compare(password, hash) {
        return bcrypt.compare(password, hash);
    }

    hash(password) {
        return bcrypt.hash(password, this.saltRounds).then(newPass => {
            return newPass;
        })
    }

    setSaltRounds(saltRounds) {
        this.saltRounds = saltRounds;
    }

    getSaltRounds() {
        return this.saltRounds;
    }
}

module.exports = Bcrypt;
