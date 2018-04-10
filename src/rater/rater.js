class Rater {
    constructor(user, hospital, content, score) {
        this.user = user;
        this.hospital = hospital;
        this.content = content;
        this.score = score;
        this.time = new Date().getTime()
    }

    getContent() {
        return this.content;
    }

    getScore() {
        return this.score;
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

    getTime() {
        return this.time;
    }
}
module.exports = Rater;
