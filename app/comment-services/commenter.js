class Commenter {

    constructor(user, hospital) {
        this.uesr = user;
        this.hospital = hospital;
        this.time = new Date().getDate();
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
