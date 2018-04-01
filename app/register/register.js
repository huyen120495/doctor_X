class Register {

    constructor(credentialRepo, userRepo, hasher) {
        this.credentialRepo = credentialRepo;
        this.userRepo = userRepo;
        this.hasher = hasher;
    }

    register(credential, user) {
        return this.hasher.hash(credential.password)
        .then(newPassword => {
            credential.setPassword(newPassword);
            return this.credentialRepo.add(credential);
        })
        .then(credentialId => {
            user.setCredentialId(credentialId[0]);
            console.log(user);
            return this.userRepo.add(user);
        });
    } 

}

module.exports = Register;
