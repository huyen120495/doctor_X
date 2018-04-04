class User {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getId() {
        return this.id;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getAvatar() {
        return this.avatar;
    }
    setCredential_id() {

    }

    getName() {
        return this.firstName +' '+ this.lastName;
    }

    getCredentialId() {
        return this.credential_id;
    }
}
module.exports = User;
