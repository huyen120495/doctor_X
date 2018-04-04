
class KeywordSearchCondition {

    constructor(keyword) {
        this.keyword = keyword;
    }
    describe(sqlQuery) {
        let keyword = this.keyword;
        return sqlQuery.where(function () {
            this.where('name','like', '%'+ keyword + '%')
                .orWhere('location_id', 'like', '%', + keyword + '%')
        }).where({deleted_at : null})
    }
}
module.exports = KeywordSearchCondition;