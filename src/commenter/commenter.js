class Commenter {
    constructor(user, hospital, content) {
        this.user = user;
        this.hospital = hospital;
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    getHospital() {
        return this.hospital;
    }

    getUser() {
        return this.user;
    }

    getId() {
        return this.id;
    }
}
module.exports = Commenter;
