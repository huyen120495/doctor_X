class Interaction {

    constructor(comment, rate) {
        this.comment = comment;
        this.rate = rate;
    }

    getComment() {
        return this.comment;
    }

    getRate() {
        return this.rate;
    }
}
module.exports = Interaction;
