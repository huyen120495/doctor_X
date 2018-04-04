class CredentialRepository {

    constructor(connection) {
        this.connection = connection;
    }

    add(credential) {
        return this.connection('credentials').insert({
            emai : credential.getEmail(),
            password : credential.getPassword()
        })
    }

    edit(credential) {
        return this.connection('credentials').update({
            emai : credential.getEmail(),
            password : credential.getPassword()
        }).where({
            id : credential.getId()
        })
    }

    findByEmail(email) {
        return this.connection('credentials').select().where({
            email: email,
            deleted_at: null
        })
    }
}
module.exports = CredentialRepository;
