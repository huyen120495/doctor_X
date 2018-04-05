class RaterReposotory {

    constructor(connection) {
        this.connection = connection;
    }

    add(rater) {
        return this.connection('rates').insert({
            hospital_id : rater.getHospital().getId(),
            hospital_name : rater.getHospital().getName(),
            user_id : rater.getUser().getId(),
            user_name : rater.getUser().getName(),
            content : rater.getContent,
            time : rater.getTime(),
            score : interaction.getRater().getScore()
        })
    }

    edit(rater) {
        return this.connection('rates').update({
            content : rater.getContent,
            score : rater.getScore()
        }).where({
            id : rater.getId(),
            deleted_at : null
        })
    }

    delete(id) {
        return this.connection('rates').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        })
    }

    searchByHospital(hospital) {
        return this.connection('rater').where({
            hospital_id : hospital.getId(),
            hospital_name : hospital.getName(),
            deleted_at : null
        })
    }

}

module.exports = RaterReposotory;