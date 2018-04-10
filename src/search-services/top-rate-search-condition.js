class TopRateSearchCondition {
    constructor(topRate) {
        this.topRate = topRate;
    }

    describe(sqlQuery){
        return sqlQuery.orderBy('avg', 'desc').where({
            deleted_at: null
        }).limit(this.topRate);
    }
}
module.exports = TopRateSearchCondition;
