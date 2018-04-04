
const bcrypt = require('bcrypt');

class BcryptHasher {

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

}

module.exports = BcryptHasher;