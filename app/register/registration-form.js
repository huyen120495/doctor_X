class RegistrationForm {

    constructor(credential, user) {
        this.credential = credential;
        this.user = user;
    }

    getCredential() {
        return this.credential;
    }

    getUser() {
        return this.user;
    }

}

module.exports = RegistrationForm;
