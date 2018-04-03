class CommenterRepository {

    constructor(connection) {
        this.connection = connection;
    }

    add(commenter) {
        return this.connection('comments').insert({
            hospital_id : commenter.getHospital().getId(),
            hospital_name : commenter.getHospital().getName(),
            user_id : commenter.getUser().getId(),
            user_name : commenter.getUser().getName(),
            content : commenter.getContent,
            time : commenter.getTime()
        })
    }

    edit(commenter) {
        return this.connection('comments').update({
            content : commenter.getContent
        }).where({
            id : commenter.getId(),
            deleted_at : null
        })
    }

    delete(id) {
        return this.connection('comments').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        })
    }

    searchByHospitalId(hospital_id) {
        return this.connection('comments').where({
            hospital_id : hospital_id,
            deleted_at : null
        })
    }

}

module.exports = CommenterRepository;
