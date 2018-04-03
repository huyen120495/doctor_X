class User {

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getFirstName() {
        return this.firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    getLastName() {
        return this.lastName;
    }

    getName() {
        return this.firstName + ' ' + this.lastName; 
    }

    setAvatar(avatar) {
        this.avatar = avatar;
    }

    getAvatar() {
        return this.avatar;
    }

    setCredentialId(cridential_id) {
        this.cridential_id = cridential_id;
    }

    getCredentialId() {
        return this.cridential_id;
    }

}

module.exports = User;
