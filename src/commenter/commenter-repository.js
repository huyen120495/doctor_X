class commenterRepository {
    constructor(connection) {
        this.connection = connection;
    }

    add(commenter){
        return this.connection('comments').insert({
            hospital_id: commenter.getHospital().getId(),
            hospital_name: commenter.getHospital().getName(),
            user_id: commenter.getUser().getId(),
            user_name : commenter.getUser().getName(),
            content : commenter.getContent()
        })
    }

    edit(commenter) {
        return this.connection('comments').update({
            content : commenter.getContent()
        }).where({
            id : commenter.getId(),
            deleted_at : null
        })
    }

    remove(id) {
        return this.connection('comments').update({
            deleted_at: new Date().toDateString()
        }).where({
            id : id
        })
    }

}
module.exports = commenterRepository;
