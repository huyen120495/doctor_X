class UserRepository {

    constructor(connection) {
        this.connection = connection;
    }
    add(user) {
        return this.connection('users').insert({
            first_name 	 : user.getFirstName(),
            last_name    : user.getLastName(),
            avatar		 : user.getAvatar(),
            credential_id: user.getCredentialId()
        });
    }

    edit(user) {
        const userEdit =  this.connection('users').update({
            first_name 	 : user.getFirstName(),
            last_name    : user.getLastName(),
            avatar		 : user.getAvatar(),
            credential_id: user.getCredentialId()
        }).where({
            id : user.getId()
        });

        const comment = this.connection('comments').update({
            user_name : user.getName()
        }).where({
            hospital_id : user.getId(),
            deleted_at : null
        });
        return Promise.all([userEdit, comment]);
    }


}
module.exports = UserRepository;
