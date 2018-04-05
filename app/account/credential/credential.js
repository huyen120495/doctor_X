class Credential {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }
    
    toJson() {
        return {
            email : this.getEmail(),
            id : this.getId()
        }
    }

}

module.exports = Credential;
