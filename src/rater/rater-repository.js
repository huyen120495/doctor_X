class RaterRepository {

    constructor(connection) {
        this.connection = connection;
    }

    add(rater){
        return this.connection('rates').insert({
            hospital_id: rater.getHospital().getId(),
            hospital_name: rater.getHospital().getName(),
            user_id: rater.getUser().getId(),
            user_name : rater.getUser().getName(),
            content : rater.getContent(),
            score  : rater.getScore(),
            times : rater.getTime()
        }).then(() => {
            this.connection('rates').avg('score').where({
                hospital_id: rater.getHospital().getId()
            }).then((rateAvg) => {
                return this.connection('hospitals').update(rateAvg[0]).where({
                    id: rater.getHospital().getId()
                })
            })
        });
    }

    edit(rater){
        return this.connection('rates').update({
            content : rater.getContent(),
            score  : rater.getScore(),
            times : rater.getTime()
        }).where({
            deleted_at: null
        })
    }


}
module.exports = RaterRepository;
