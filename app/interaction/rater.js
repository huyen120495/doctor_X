class Rater {

    constructor(user, hospital, score) {
        this.uesr = user;
        this.hospital = hospital;
        this.score = score;
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

}

module.exports = Rater;
