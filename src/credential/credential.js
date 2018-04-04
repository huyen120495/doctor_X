class Credential {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getId() {
        return this.id;
    }

    setPassword(password) {
        this.password = password;
    }
}

module.exports = Credential;
