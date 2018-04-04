class HospitalRepository {
    constructor(connection) {
        this.connection = connection;
    }
    add(hospital) {
        return this.connection('hospitals').insert({
            name : hospital.getName(),
            location_id : hospital.getLocation().getId(),
            phone : hospital.getPhone(),
            describe : hospital.getDescribe()
        })
    }

    edit(hospital) {
        const hospitalEdit = this.connection('hospitals').insert({
            name : hospital.getName(),
            location_id : hospital.getLocation().getId(),
            phone : hospital.getPhone(),
            describe : hospital.getDescribe()
        }).where({
            id : hospital.getId(),
            deleted_at: null
        });

        const comment = this.connection('comments').update({
            user_name : hospital.getName()
        }).where({
            hospital_id : hospital.getId(),
            deleted_at : null
        });
        return Promise.all([hospitalEdit, comment]);
    }

    remove(id) {
        return this.connection('hospitals').update({
            deleted_at: new Date().toDateString()
        }).where({
            id : id
        })
    }

    all() {
        return this.connection('hospitals')
            .select('hospitals.id', 'hospitals.name', 'hospitals.location_id', 'hospitals.phone',
                'hospitals.describe', 'locations.lat', 'locations.long', 'locations.address')
            .from('hospitals')
            .innerJoin('locations', function() {
                this.on('location_id', '=', 'locations.id')
            }).where({
                'hospitals.deleted_at' : null
            })
    }
}

module.exports = HospitalRepository;
