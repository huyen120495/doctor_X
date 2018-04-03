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
        let hospitalEdit = this.connection('hospitals').update({
            name : hospital.getName(),
            location_id : hospital.getLocation().getId() ? hospital.getLocation().getId() : null,
            phone : hospital.getPhone() ? hospital.getPhone() : null,
            describe : hospital.getDescribe() ? hospital.getDescribe() : null
        }).where({
            id : hospital.getId(),
            deleted_at : null
        })
        let hospitalComment = this.connection('comments').update({
            hospital_name : hospital.getName()
        }).where({
            hospital_id : hospital.getId(),
            deleted_at : null
        })
        return Promise.all([hospitalEdit, hospitalComment]);
    }

    delete(id) {
        return this.connection('hospitals').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        })
    }

    detail(id) {
        return this.connection('hospitals')
        .select('hospitals.id', 'hospitals.name', 'hospitals.location_id', 'hospitals.phone', 'hospitals.describe', 'locations.lat', 'locations.long', 'locations.address')
        .limit(1)
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

    searchByKeyword(keyword) {
        return this.connection('hospitals')
        .select('hospitals.id', 'hospitals.name', 'hospitals.location_id', 'hospitals.phone', 'hospitals.describe', 'locations.lat', 'locations.long', 'locations.address')
        .from('hospitals')
        .innerJoin('locations', function() {
            this.on('location_id', '=', 'locations.id')
        })
        .where(function () {
        this.where('hospitals.name', 'like', '%' + keyword + '%')
            .orWhere('hospitals.describe', 'like', '%' + keyword + '%')
            .orWhere('locations.address', 'like', '%' + keyword + '%')
        })
        .where('hospitals.deleted_at', null);
    }

}

module.exports = HospitalRepository;
