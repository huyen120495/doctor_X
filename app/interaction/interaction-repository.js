class InteractionRepo {

    constructor(connection) {
        this.connection = connection;
    }
    
    add(interaction) {
        let commenter = this.connection('comments').insert({
            hospital_id : interaction.getCommenter().getHospital().getId(),
            hospital_name : interaction.getCommenter().getHospital().getName(),
            user_id : interaction.getCommenter().getUser().getId(),
            user_name : interaction.getCommenter().getUser().getName(),
            content : interaction.getCommenter().getContent,
            time : interaction.getCommenter().getTime()
        })
        let rater = this.connection('rates').insert({
            hospital_id : interaction.getRater().getHospital().getId(),
            hospital_name : interaction.getRater().getHospital().getName(),
            user_id : interaction.getRater().getUser().getId(),
            user_name : interaction.getRater().getUser().getName(),
            score : interaction.getRater().getScore()
        })
        return Promise.all([commenter, rater]);
    }

    edit(interaction) {
        let commenter = this.connection('comments').update({
            hospital_id : interaction.getCommenter().getHospital().getId(),
            hospital_name : interaction.getCommenter().getHospital().getName(),
            user_id : interaction.getCommenter().getUser().getId(),
            user_name : interaction.getCommenter().getUser().getName(),
            content : interaction.getCommenter().getContent,
            time : interaction.getCommenter().getTime()
        }).where({
            id : interaction.getCommenter().getId(),
            deleted_at : null
        })
        let rater = this.connection('rates').update({
            hospital_id : interaction.getRater().getHospital().getId(),
            hospital_name : interaction.getRater().getHospital().getName(),
            user_id : interaction.getRater().getUser().getId(),
            user_name : interaction.getRater().getUser().getName(),
            score : interaction.getRater().getScore()
        }).where({
            id : interaction.getRater().getId(),
            deleted_at : null
        })
        return Promise.all([commenter, rater]);
    }

    delete(id) {
        let commenter = this.connection('comments').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        })
        let rater = this.connection('rates').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        })
        return Promise.all([commenter, rater]);
    }

    searchByHospitalId(hospital_id) {
        let commenter = this.connection('comments').where({
            hospital_id : hospital_id,
            deleted_at : null
        })
        let rater = this.connection('rates').where({
            hospital_id : hospital_id,
            deleted_at : null
        })
        return Promise.all([commenter, rater]);
    }

}

module.exports = InteractionRepo;
