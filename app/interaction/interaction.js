class Interaction {

    constructor(commenter, rater) {
        this.commenter = commenter;
        this.rater = rater;
    }

    getCommenter() {
        return this.commenter;
    }

    getRater() {
        return this.rater;
    }

}

module.exports = Interaction;
