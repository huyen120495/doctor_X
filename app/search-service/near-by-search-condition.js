class NearBySearchCondition {
    
    constructor(location, radius) {
        this.location = location;
        this.radius = radius;
    }

    describe(sqlQuery) {
        return sqlQuery

    }
    
}

module.exports = NearBySearchCondition;
