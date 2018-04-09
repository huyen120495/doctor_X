class HospitalRepository {

    constructor(connection) {
        this.connection = connection;
    }

    add(hospital) {
        return this.connection('locations').insert({
            lat : hospital.getLocation().getLat(),
            long : hospital.getLocation().getLong(),
            address : hospital.getLocation().getAddress()
        }).then(location_id => {
            hospital.getLocation().setId(location_id);
            return this.connection('hospitals').insert({
                name : hospital.getName(),        
                location_id : hospital.getLocation().getId() ? hospital.getLocation().getId() : null,
                phone : hospital.getPhone() ? hospital.getPhone() : null,
                describe : hospital.getDescribe() ? hospital.getDescribe() : null
            })
        })
    }

    edit(hospital) {
        let hospitalEdit = this.connection('locations').insert({
            lat : hospital.getLocation().getLat(),
            long : hospital.getLocation().getLong(),
            address : hospital.getLocation().getAddress()
        }).where({
            id : hospital.getLocation().getId()
        })
        .then(() => {
            return this.connection('hospitals').insert({
                name : hospital.getName(),        
                location_id : hospital.getLocation().getId() ? hospital.getLocation().getId() : null,
                phone : hospital.getPhone() ? hospital.getPhone() : null,
                describe : hospital.getDescribe() ? hospital.getDescribe() : null
            }).where({
                id : hospital.getId(),
                deleted_at : null
            })
        })
        let hospitalRate = this.connection('rates').update({
            hospital_name : hospital.getName()
        }).where({
            hospital_id : hospital.getId(),
            deleted_at : null
        })
        return Promise.all([hospitalEdit, hospitalRate]);
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

}

module.exports = HospitalRepository;
