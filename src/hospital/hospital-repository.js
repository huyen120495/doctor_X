class HospitalRepository {


    constructor(connection){
        this.connection = connection;
    }

    /**
     *
     * @param {Hospital} hospital
     */
    add(hospital) {
        return this.connection('hospitals').insert({
            name: hospital.getName(),
            location_id: hospital.getLocation_Id(),
            describe: hospital.getDescribe(),
        })
    }

    /**
     *
     * @param {Hospital} hospital
     */
    edit(hospital) {
        return this.connection('hospitals').update({
            name: hospital.getName(),
            location_id: hospital.getLocation_Id(),
            describe: hospital.getDescribe()
        }).where({id: hospital.getId()});
    }

    /**
     *
     * @param {INT} id
     */
    remove(id) {
        return this.connection('hospitals').update({
            deleted_at: new Date().toLocaleDateString()
        }).where({id: id});
    }
}

module.exports = HospitalRepository;
