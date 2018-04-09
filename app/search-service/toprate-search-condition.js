class TopRateSearchCondition {
    
    constructor() {
        this.top = 10;
    }

    setTop(top) {
        this.top = top;
    }

    describe(sqlQuery) {
        return sqlQuery.orderBy('avg_rate', desc).limit(this.top)
    }

}

module.exports = TopVoteSearchCondition;
