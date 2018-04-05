class Rater {

    constructor(user, hospital, score, content) {
        this.uesr = user;
        this.hospital = hospital;
        this.score = score;
        this.content = content;
        this.time = new Date().getTime();
    }

    setScore(score) {
        this.score = score;
    }

    getScore() {
        return this.score;
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

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

}

module.exports = Rater;
