class Hospital {

    /**
     *
     * @param {string} name
     * @param {INT} location_id
     */
    constructor(name, location_id) {
        this.name = name;
        this.location_id = location_id;
    }

    /**
     *
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @return {INT|*}
     */
    getLocation_Id() {
        return this.location_id;
    }

    /**
     *
     * @param {string} describe
     */
    setDescribe(describe) {
        this.describe = describe;
    }
    /**
     *
     * @return {string}
     */
    getDescribe() {
        return this.describe;
    }

    /**
     *
     * @param {INT} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {INT|*}
     */
    getId() {
        return this.id;
    }
}

module.exports = Hospital;
