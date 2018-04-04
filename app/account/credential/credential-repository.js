class CridentialReposytory {
    
    constructor(connection) {
        this.connection = connection;
    }

    add(cridential) {
        return this.connection('credentials').insert({
            email : cridential.getEmail(),
            password : cridential.getPassword()
        });
    }

    edit(cridential) {
        return this.connection('credentials').update({
            email : cridential.getEmail(),
            password : cridential.getPassword() 
        }).where({
            id : cridential.getId()
        });
    }

    delete(id) {
        return this.connection('credentials').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        });
    }

    getAll() {
        return this.connection('credentials').where({
            deleted_at : null
        });
    }

    searchByEmail(email) {
        return this.connection('credentials').limit(1)
        .where({
            email : email,
            deleted_at : null
        });
    }

}

module.exports = CridentialReposytory;
