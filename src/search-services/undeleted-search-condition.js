class UndeletedSearchCondition {

    describe(sqlQuery) {
        return sqlQuery.where({'hospitals.deleted_at': null});
    }
}

module.exports = UndeletedSearchCondition;
