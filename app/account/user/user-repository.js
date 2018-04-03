class UserRepository {

    constructor(connection) {
        this.connection = connection;
    }

    add(user) {
        return this.connection('users').insert({
            first_name : user.getFirstName(),
            last_name : user.getLastName(),
            avatar : user.getAvatar(),
            credential_id : user.getCredentialId()
        });
    }

    edit(user) {
        let userEdit = this.connection('users').update({
            first_name : user.getFirstName(),
            last_name : user.getLastName(),
            avatar : user.getAvatar(),
            credential_id : user.getCredentialId()
        }).where({
            id : user.getId()
        })
        let userComment = this.connection('comments').update({
            user_name : user.getName()
        }).where({
            user_id : user.getId(),
            deleted_at : null
        })
        return Promise.all([userEdit, userComment]);
    }

    searchByCredentialId(id) {
        return this.connection('users').limit(1)
        .where({
            credential_id : id
        });
    }

}

module.exports = UserRepository;
