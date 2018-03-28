class HospitalRepository {

    constructor(connection) {
        this.connection = connection;
    }

    add(hospital) {
        return this.connection('hospitals').insert({
            name : hospital.getName(),        
            location_id : hospital.getLocation().getId() ? hospital.getLocation().getId() : null,
            phone : hospital.getPhone() ? hospital.getPhone() : null,
            describe : hospital.getDescribe() ? hospital.getDescribe() : null
        })
    }

    edit(hospital) {
        return this.connection('hospitals').update({
            name : hospital.getName(),
            location_id : hospital.getLocation().getId() ? hospital.getLocation().getId() : null,
            phone : hospital.getPhone() ? hospital.getPhone() : null,
            describe : hospital.getDescribe() ? hospital.getDescribe() : null
        }).where({
            id : hospital.getId()
        })
    }

    delete(id) {
        return this.connection('hospitals').update({
            deleted_at : new Date().getDate()
        }).where({
            id : id
        })
    }

    detail(id) {
        return this.connection('hospitals')
        .select('hospitals.id', 'hospitals.name', 'hospitals.location_id', 'hospitals.phone', 'hospitals.describe', 'locations.lat', 'locations.long', 'locations.address')
        .from('hospitals')
        .innerJoin('locations', function() {
            this.on('location_id', '=', 'locations.id')
        }).where({
            'hospitals.id' : id,
            'hospitals.deleted_at' : null
        })
    }

    all() {
        return this.connection('hospitals')
        .select('hospitals.id', 'hospitals.name', 'hospitals.location_id', 'hospitals.phone', 'hospitals.describe', 'locations.lat', 'locations.long', 'locations.address')
        .from('hospitals')
        .innerJoin('locations', function() {
            this.on('location_id', '=', 'locations.id')
        }).where({
            'hospitals.deleted_at' : null
        })
    }

}

module.exports = HospitalRepository;
