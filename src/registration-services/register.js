class Register {
    constructor(credentialRepo, hash, userRepo) {
        this.credentialRepo = credentialRepo;
        this.hash = hash;
        this.userRepo = userRepo;
    }

    signUp(credential, user) {
        return this.hash.hash(credential.getPassword())
            .then(password => {
                credential.setPassword(password);
                return this.credentialRepo.add(credential);
            }).then(credential_id => {
                user.setCredential_id(credential_id);
                return this.userRepo.add(user);
            })
    }
}
module.exports = Register;
