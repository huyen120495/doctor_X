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
        return this.connection('users').update({
            first_name : user.getFirstName(),
            last_name : user.getLastName(),
            avatar : user.getAvatar(),
            credential_id : user.getCredentialId()
        }).where({
            id : user.getId()
        })
    }

    searchByCredentialId(id) {
        return this.connection('users').limit(1)
        .where({
            credential_id : id
        });
    }

}

module.exports = UserRepository;
