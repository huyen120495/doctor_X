class interactionRepository {
    constructor(connection) {
        this.connection = connection;
    }
    add(interact) {
        const comment = this.connection('comments').insert({
            hospital_id: interact.getComment().getHospital().getId(),
            hospital_name: interact.getComment().getHospital().getName(),
            user_id: interact.getComment().getUser().getId(),
            user_name : interact.getComment().getUser().getName(),
            content : interact.getComment().getContent()
        });

        const rate = this.connection('rates').insert({
            hospital_id: interact.getRate().getHospital().getId(),
            hospital_name: interact.getRate().getHospital().getName(),
            user_id: interact.getRate().getUser().getId(),
            user_name : interact.getRate().getUser().getName(),
            content : interact.getRate().getContent()
        });
        return Promise.all([comment, rate]);
    }

    edit(interact) {
        const comment = this.connection('comments').update({
            content : interact.getComment().getContent()
        }).where({
            id : interact.getComment().getId(),
            deleted_at : null
        });

        const rate = this.connection('rates').update({
            content : interact.getRate().getContent()
        }).where({
            id : interact.getRate().getId(),
            deleted_at : null
        });
        return Promise.all([comment, rate]);
    }

    remove(id) {
        const comment = this.connection('comments').update({
            deleted_at: new Date().toDateString()
        }).where({
            id : id
        });

        const rate = this.connection('rates').update({
            deleted_at: new Date().toDateString()
        }).where({
            id : id
        });

        return Promise.all([comment, rate]);
    }
}
module.exports = interactionRepository;
