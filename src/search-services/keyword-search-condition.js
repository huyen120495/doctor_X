class KeywordSearchCondition {

    constructor(keyword) {
        this.keyword = keyword;
    }
    describe(sqlQuery) {
        let keyword = this.keyword;
        return sqlQuery.where('name','like', '%'+ keyword + '%')
        .where({deleted_at : null})
    }
}
module.exports = KeywordSearchCondition;
