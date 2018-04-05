class KeywordSearchCondition {

    constructor(keyword) {
        this.keyword = keyword;
    }

    describe(sqlQuery) {
        let keyword = this.keyword;
        return sqlQuery
        .where(function () {
        this.where('hospitals.name', 'like', '%' + keyword + '%')
            .orWhere('hospitals.describe', 'like', '%' + keyword + '%')
            .orWhere('locations.address', 'like', '%' + keyword + '%')
        })
    }

}

module.exports = KeywordSearchCondition;
