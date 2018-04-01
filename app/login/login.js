class Login {

    constructor(credentialRepo, hasher, userRepo) {
        this.credentialRepo = credentialRepo;
        this.hasher = hasher;
        this.userRepo = userRepo;
    }

    login(credential) {
        return this.credentialRepo.searchByEmail(credential.email)
        .then(credentialDB => {
            if (!credentialDB[0]) throw new Error("Email k dung");
            credential.setId(credentialDB[0].id);
            return this.hasher.compare(credential.password, credentialDB[0].password)
        })
        .then(isLogin => {
            if (!isLogin) throw new Error("Password k dung");
            return this.userRepo.searchByCredentialId(credential.id);
        });
    }

}

module.exports = Login;
