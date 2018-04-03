class Commenter {

    constructor(user, hospital, content) {
        this.uesr = user;
        this.hospital = hospital;
        this.content = content;
        this.time = new Date().getTime();
    }

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    getUser() {
        return this.uesr;
    }

    getHospital() {
        return this.hospital;
    }

    getTime() {
        return this.time;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

}

module.exports = Commenter;
