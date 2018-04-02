class Register {

    constructor(credentialRepo, userRepo, hasher) {
        this.credentialRepo = credentialRepo;
        this.userRepo = userRepo;
        this.hasher = hasher;
    }

    register(registrationForm) {
        return this.hasher.hash(registrationForm.getCredential().getPassword())
        .then(newPassword => {
            registrationForm.getCredential().setPassword(newPassword);
            return this.credentialRepo.add(registrationForm.getCredential());
        })
        .then(credentialId => {
            registrationForm.getUser().setCredentialId(credentialId[0]);
            return this.userRepo.add(registrationForm.getUser());
        });
    } 

}

module.exports = Register;
